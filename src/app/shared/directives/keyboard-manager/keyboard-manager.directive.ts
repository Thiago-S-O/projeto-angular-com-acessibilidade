import { ContentChildren, Directive, HostListener, QueryList } from '@angular/core';
import { KeyboardManagerItemDirective } from './keyboard-manager-item.directive';

@Directive({
  selector: '[appKeyboardManager]'
})
export class KeyboardManagerDirective {

  @ContentChildren(KeyboardManagerItemDirective)
  public items: QueryList<KeyboardManagerItemDirective> = null;

  @HostListener('keyup', ['$event'])
  public manangeKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        // console.log(this.items);
        // console.log('up');
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
      case 'ArrowDown':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowLeft':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowRight':
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
    }

  }

  constructor() { }

  public moveFocus(direction: ArrowDirection): KeyboardManagerItemDirective {
    const items = this.items.toArray();
    const currentSelectedIndex = items.findIndex(items => items.isFocused());
    const targetElementFucus = items[currentSelectedIndex + direction];
    if (targetElementFucus) {
      return targetElementFucus;
    }

    return direction === ArrowDirection.LEFT ? items[items.length - 1] : items[0];
  }
}

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1
}
