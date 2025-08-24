# Accessibility Improvements

- Implemented ARIA roles and attributes: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-current` (on timeline markers), and `role="list"` and `role="listitem"`.
- All timeline markers are keyboard navigable (`tabindex="0"`) and reachable via Tab and Arrow keys. Markers announce their label.
- Modal dialog traps focus, is closable via Esc, returns focus to the triggering marker, and has proper roles and labels.
- Close button is reachable/operable via keyboard.
- All images have text alternatives.
- Colour contrast is tested to meet WCAG AA standards (ratio ≥ 4.5:1 for text).
- Responsive and keyboard-accessible interaction.
- Changes reviewed for overall WCAG compliance.
