import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BxSubHeadingComponent } from '../../atom/bx-sub-heading/bx-sub-heading.component';
import { BxSubTitleComponent } from '../../atom/bx-sub-title/bx-sub-title.component';
import { BxCardComponent } from '../../atom/bx-card/bx-card.component';
import { BxSubmitBtnComponent } from '../../atom/bx-submit-btn/bx-submit-btn.component';

@Component({
  selector: 'app-bx-offer-card',
  standalone: true,
  imports: [CommonModule,
            BxSubHeadingComponent,
            BxSubTitleComponent,BxCardComponent,
            BxSubmitBtnComponent
          ],
  templateUrl: './bx-offer-card.component.html',
  styleUrl: './bx-offer-card.component.scss'
})

export class BxOfferCardComponent {
  customStyles = {
    display: 'none',
  };
  
}
