import {Component} from '@angular/core';
import {PdfJsViewerModule} from 'ng2-pdfjs-viewer';

@Component({
  standalone: true,
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  imports: [PdfJsViewerModule]
})
export class ResumeComponent {
  resumeSrc = 'RaulTobo_Resume.pdf';
}
