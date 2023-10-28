import { Component, Input } from '@angular/core';
import { markdown } from 'src/shared/mock/markdown';
import ClipboardJS from 'clipboard';

@Component({
  selector: 'app-code-highlighter',
  templateUrl: './code-highlighter.component.html',
  styleUrls: ['./code-highlighter.component.scss'],
})
export class CodeHighlighterComponent {
  @Input() markdownData!: string;
  copyStatus = false
  get copyStatusClass() {
    return {
      'show-not': this.copyStatus,
      'hide-not': !this.copyStatus
    }
  }

  copyToClipboard() {
    const copyDiv = document.getElementById('copyToClipboard') as HTMLElement;
    const clipboard = new ClipboardJS('.clipboard', {
      text: () => copyDiv.innerText
    });
    clipboard.on('success', ()=> {
      this.copyStatus = true
      setTimeout(() => {
        this.copyStatus = false
      }, 3000);
    })
  }
}