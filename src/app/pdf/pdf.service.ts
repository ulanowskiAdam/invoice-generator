import { Injectable } from '@angular/core';
//@ts-ignore
import * as html2pdf from 'html2pdf.js';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor() {}

  generatePdfFromHtmlElement(elementId: string, fileName: string): void {
    const element = document.getElementById(elementId);

    if (!element) {
      console.error(`Element with ID '${elementId}' not found`);
      return;
    }

    const options = {
      filename: fileName,
      margin: [10, 10, 10, 10],
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, logging: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(element).set(options).save();
  }
}
