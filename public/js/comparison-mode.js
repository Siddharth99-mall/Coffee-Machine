// Comparison Mode for Listing Page
class ComparisonMode {
  constructor() {
    this.selectedMachines = [];
    this.maxSelections = 2;
    this.init();
  }

  init() {
    // Check if comparison mode is enabled
    const urlParams = new URLSearchParams(window.location.search);
    const inComparisonMode =
      urlParams.has('comparison') ||
      sessionStorage.getItem('comparisonMode') === 'true';

    if (inComparisonMode) {
      this.enableComparisonMode();
    }
  }

  enableComparisonMode() {
    sessionStorage.removeItem('comparisonMode');

    // Find all listing cards and add checkboxes
    const listingCards = document.querySelectorAll('[data-listing-id]');

    if (listingCards.length === 0) {
      console.log('No listing cards found');
      return;
    }

    listingCards.forEach((card) => {
      const listingId = card.getAttribute('data-listing-id');
      const listingTitle =
        card.getAttribute('data-listing-title') ||
        card.querySelector('h5')?.textContent ||
        'Machine';

      // Create checkbox container
      const checkboxContainer = document.createElement('div');
      checkboxContainer.className = 'comparison-checkbox-container';
      checkboxContainer.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 10;
      `;

      // Create checkbox input
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'comparison-checkbox';
      checkbox.setAttribute('data-listing-id', listingId);
      checkbox.setAttribute('data-listing-title', listingTitle);
      checkbox.style.cssText = `
        width: 20px;
        height: 20px;
        cursor: pointer;
      `;

      checkbox.addEventListener('change', (e) => {
        this.handleCheckboxChange(e, listingTitle);
      });

      checkboxContainer.appendChild(checkbox);

      // Make card position relative if not already
      if (card.style.position !== 'absolute') {
        card.style.position = 'relative';
      }

      card.appendChild(checkboxContainer);
    });

    // Create floating comparison panel
    this.createComparisonPanel();

    // Show instruction message
    this.showInstructions();
  }

  handleCheckboxChange(event, listingTitle) {
    const checkbox = event.target;
    const listingId = checkbox.getAttribute('data-listing-id');

    if (checkbox.checked) {
      if (this.selectedMachines.length >= this.maxSelections) {
        // Uncheck if already at max
        checkbox.checked = false;
        this.showNotification(
          `You can only select ${this.maxSelections} machines for comparison`
        );
        return;
      }

      this.selectedMachines.push({
        id: listingId,
        title: listingTitle,
      });
    } else {
      this.selectedMachines = this.selectedMachines.filter(
        (m) => m.id !== listingId
      );
    }

    this.updateComparisonPanel();
  }

  createComparisonPanel() {
    // Remove existing panel if any
    const existingPanel = document.getElementById('comparison-panel');
    if (existingPanel) existingPanel.remove();

    const panel = document.createElement('div');
    panel.id = 'comparison-panel';
    panel.className = 'comparison-panel';
    panel.innerHTML = `
      <div class="comparison-panel-content">
        <h4 style="margin-top: 0; color: #333;">Select Machines to Compare</h4>
        <div id="selected-list" style="margin: 15px 0; min-height: 40px;">
          <p style="color: #999; font-size: 14px;">No machines selected (0/${this.maxSelections})</p>
        </div>
        <button id="compare-btn" class="compare-btn" disabled>
          Compare Selected
        </button>
        <button id="cancel-comparison" class="cancel-btn">
          Close
        </button>
      </div>
    `;

    document.body.appendChild(panel);

    // Add event listeners
    document
      .getElementById('compare-btn')
      .addEventListener('click', () => this.submitComparison());
    document
      .getElementById('cancel-comparison')
      .addEventListener('click', () => this.closeComparisonMode());
  }

  updateComparisonPanel() {
    const selectedList = document.getElementById('selected-list');
    const compareBtn = document.getElementById('compare-btn');

    if (this.selectedMachines.length === 0) {
      selectedList.innerHTML = `<p style="color: #999; font-size: 14px;">No machines selected (0/${this.maxSelections})</p>`;
      compareBtn.disabled = true;
    } else {
      const items = this.selectedMachines
        .map(
          (m, i) =>
            `<div style="padding: 8px 12px; background: #f0f0f0; border-radius: 6px; margin: 4px 0; display: flex; justify-content: space-between; align-items: center;">
              <span><strong>${i + 1}.</strong> ${m.title}</span>
              <button class="remove-selection" data-id="${m.id}" style="background: none; border: none; color: #e74c3c; cursor: pointer; font-size: 16px; padding: 0;">×</button>
            </div>`
        )
        .join('');

      selectedList.innerHTML = items;

      // Add remove button listeners
      document.querySelectorAll('.remove-selection').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const id = e.target.getAttribute('data-id');
          const checkbox = document.querySelector(
            `.comparison-checkbox[data-listing-id="${id}"]`
          );
          if (checkbox) checkbox.checked = false;
          this.selectedMachines = this.selectedMachines.filter(
            (m) => m.id !== id
          );
          this.updateComparisonPanel();
        });
      });

      if (this.selectedMachines.length === this.maxSelections) {
        compareBtn.disabled = false;
        compareBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      } else {
        compareBtn.disabled = true;
      }
    }
  }

  submitComparison() {
    if (this.selectedMachines.length !== this.maxSelections) {
      this.showNotification('Please select exactly 2 machines');
      return;
    }

    const [machine1, machine2] = this.selectedMachines;

    // Navigate to comparison page
    window.location.href = `/listing/compare?machine1=${encodeURIComponent(
      machine1.title
    )}&machine2=${encodeURIComponent(machine2.title)}`;
  }

  closeComparisonMode() {
    // Remove comparison panel
    const panel = document.getElementById('comparison-panel');
    if (panel) panel.remove();

    // Remove all checkboxes
    document
      .querySelectorAll('.comparison-checkbox-container')
      .forEach((container) => container.remove());

    // Reset selection
    this.selectedMachines = [];

    // Remove instruction message
    const instruction = document.getElementById('comparison-instruction');
    if (instruction) instruction.remove();
  }

  showInstructions() {
    const instruction = document.createElement('div');
    instruction.id = 'comparison-instruction';
    instruction.style.cssText = `
      position: fixed;
      top: 20px;
      left: 20px;
      right: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      z-index: 100;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    `;

    instruction.innerHTML = `
      <span>✓ Comparison mode enabled. Check any 2 machines to compare them.</span>
      <button id="close-instruction" style="background: none; border: none; color: white; cursor: pointer; font-size: 20px; padding: 0;">×</button>
    `;

    document.body.appendChild(instruction);

    document
      .getElementById('close-instruction')
      .addEventListener('click', () => {
        instruction.remove();
      });
  }

  showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #e74c3c;
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      z-index: 1000;
      animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ComparisonMode();
});
