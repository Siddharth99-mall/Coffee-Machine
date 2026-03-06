class CoffeeBot {
  constructor() {
    this.isOpen = false;
    this.messages = [];
    this.conversationState = null; // Track conversation state
    this.conversationData = {}; // Store data during conversation
    this.init();
  }

  init() {
    this.createWidget();
    this.attachEventListeners();
    this.addWelcomeMessage();
  }

  createWidget() {
    const widget = document.createElement('div');
    widget.className = 'chatbot-widget';
    widget.innerHTML = `
      <button class="chatbot-toggle" id="chatbot-toggle" aria-label="Toggle Chatbot">
        💬
      </button>
      <div class="chatbot-container" id="chatbot-container">
        <div class="chatbot-header">
          <h3>Coffee Machine Assistant</h3>
          <button class="chatbot-close" id="chatbot-close">×</button>
        </div>
        <div class="chatbot-messages" id="chatbot-messages"></div>
        <div class="chatbot-input-area">
          <input
            type="text"
            class="chatbot-input"
            id="chatbot-input"
            placeholder="Ask me about machines..."
            aria-label="Chat input"
          />
          <button class="chatbot-send" id="chatbot-send" aria-label="Send message">
            📤
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(widget);
  }

  attachEventListeners() {
    const toggle = document.getElementById('chatbot-toggle');
    const close = document.getElementById('chatbot-close');
    const send = document.getElementById('chatbot-send');
    const input = document.getElementById('chatbot-input');

    toggle.addEventListener('click', () => this.toggleChat());
    close.addEventListener('click', () => this.closeChat());
    send.addEventListener('click', () => this.sendMessage());
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
  }

  toggleChat() {
    this.isOpen ? this.closeChat() : this.openChat();
  }

  openChat() {
    this.isOpen = true;
    document.getElementById('chatbot-container').classList.add('active');
    document.getElementById('chatbot-toggle').classList.add('active');
    document.getElementById('chatbot-input').focus();
  }

  closeChat() {
    this.isOpen = false;
    document.getElementById('chatbot-container').classList.remove('active');
    document.getElementById('chatbot-toggle').classList.remove('active');
  }

  addMessage(text, isUser = false, isHTML = false) {
    const messagesDiv = document.getElementById('chatbot-messages');
    const messageEl = document.createElement('div');
    messageEl.className = `message ${isUser ? 'user' : 'bot'}`;

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    if (isHTML) {
      bubble.innerHTML = text;
    } else {
      bubble.textContent = text;
    }

    messageEl.appendChild(bubble);
    messagesDiv.appendChild(messageEl);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  addWelcomeMessage() {
    const suggestions = [
      'Compare two machines',
      'Best budget machine',
      'Premium recommendations',
      'Filter by category',
      'Show all machines'
    ];

    this.addMessage(
      `👋 Hi! I'm your Coffee Machine Assistant. I can help you with:
      <br><br>• <strong>Compare</strong> two machines
      <br>• Find the <strong>best choice</strong> for your budget
      <br>• Get <strong>recommendations</strong>
      <br>• Filter by <strong>machine type</strong>
      <br>• Explore our <strong>catalog</strong>
      <br><br>What would you like to do?`,
      false,
      true
    );

    this.showSuggestions(suggestions);
  }

  showSuggestions(suggestions) {
    const messagesDiv = document.getElementById('chatbot-messages');
    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.className = 'chatbot-suggestions';

    suggestions.forEach((suggestion) => {
      const btn = document.createElement('button');
      btn.className = 'suggestion-btn';
      btn.textContent = suggestion;
      btn.addEventListener('click', () => {
        this.handleSuggestionClick(suggestion);
      });
      suggestionsDiv.appendChild(btn);
    });

    messagesDiv.appendChild(suggestionsDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  handleSuggestionClick(suggestion) {
    this.addMessage(suggestion, true);
    document.getElementById('chatbot-input').value = '';

    // Handle "Compare two machines" specially
    if (suggestion === 'Compare two machines') {
      this.conversationState = null;
      this.conversationData = {};
      this.addMessage(
        'Redirecting you to the listings page where you can select machines to compare...'
      );
      setTimeout(() => {
        // Set a flag in sessionStorage to enable comparison mode
        sessionStorage.setItem('comparisonMode', 'true');
        window.location.href = '/listing?comparison=true';
      }, 1000);
    } else {
      this.processBotResponse(suggestion);
    }
  }

  sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();

    if (!message) return;

    this.addMessage(message, true);
    input.value = '';

    // Show loading indicator
    this.showLoadingIndicator();

    // Simulate processing time
    setTimeout(() => {
      this.removeLoadingIndicator();
      this.processBotResponse(message);
    }, 500);
  }

  showLoadingIndicator() {
    const messagesDiv = document.getElementById('chatbot-messages');
    const loadingEl = document.createElement('div');
    loadingEl.className = 'message bot';
    loadingEl.id = 'loading-indicator';
    loadingEl.innerHTML =
      '<div class="message-bubble"><div class="loading"><span></span><span></span><span></span></div></div>';
    messagesDiv.appendChild(loadingEl);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  removeLoadingIndicator() {
    const loading = document.getElementById('loading-indicator');
    if (loading) loading.remove();
  }

  processBotResponse(userMessage) {
    const lower = userMessage.toLowerCase();

    if (
      lower.includes('list') ||
      lower.includes('show all') ||
      lower.includes('all machines') ||
      lower.includes('catalog')
    ) {
      this.handleShowAll();
    } else if (
      lower.includes('budget') ||
      lower.includes('cheap') ||
      lower.includes('affordable')
    ) {
      this.handleBudgetRecommendation();
    } else if (
      lower.includes('premium') ||
      lower.includes('best') ||
      lower.includes('expensive')
    ) {
      this.handlePremiumRecommendation();
    } else if (
      lower.includes('automatic') ||
      lower.includes('manual') ||
      lower.includes('semi') ||
      lower.includes('filter')
    ) {
      this.handleCategoryFilter(userMessage);
    } else {
      this.addMessage(
        'I can help you with comparisons, recommendations, and filtering. Try asking me to "compare two machines", find "budget options", or "show all machines"!'
      );
    }
  }

  handleCategoryFilter(userMessage) {
    let category = '';
    if (
      userMessage.toLowerCase().includes('automatic')
    ) {
      category = 'Automatic';
    } else if (
      userMessage.toLowerCase().includes('manual')
    ) {
      category = 'Manual';
    } else if (
      userMessage.toLowerCase().includes('semi')
    ) {
      category = 'Semi-Automatic';
    }

    if (category) {
      this.addMessage(
        `Showing <strong>${category}</strong> coffee machines...`
      );
      setTimeout(() => {
        window.location.href = `/listing?category=${encodeURIComponent(
          category
        )}`;
      }, 1000);
    } else {
      this.addMessage(
        'I can filter by: Automatic, Manual, or Semi-Automatic machines. Which would you prefer?'
      );
      this.showSuggestions(['Automatic', 'Manual', 'Semi-Automatic']);
    }
  }

  handleShowAll() {
    this.addMessage('Let me show you all available coffee machines...');
    setTimeout(() => {
      window.location.href = '/listing';
    }, 1000);
  }

  handleBudgetRecommendation() {
    this.addMessage('Showing the most affordable machines for you...');
    setTimeout(() => {
      window.location.href = '/listing?sort=price&order=asc';
    }, 1000);
  }

  handlePremiumRecommendation() {
    this.addMessage('Let me show you our premium coffee machines...');
    setTimeout(() => {
      window.location.href = '/listing?sort=price&order=desc';
    }, 1000);
  }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new CoffeeBot();
});
