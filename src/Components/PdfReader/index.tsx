import React from "react";
// import { Document, Page } from "react-pdf";
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface S{ numPages, pageNumber }

export default class PDFReader extends React.PureComponent<{}, S> {

    public state: Readonly<S> = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
        console.log(numPages)
    };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        {numPages > 1 &&
            <nav>
            <button onClick={this.goToPrevPage}>Prev</button>
            <button onClick={this.goToNextPage}>Next</button>
          </nav>
        }

        <div style={{ width: 600 }}>
          <Document
            file="/uploads/attestation_fiscale.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}