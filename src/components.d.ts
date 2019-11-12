/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CanvasRecorder {
    'canvas': HTMLCanvasElement;
    'isSupported': () => Promise<boolean>;
    'saveImage': () => Promise<void>;
    'start': () => Promise<void>;
    'status': () => Promise<any>;
    'stop': () => Promise<unknown>;
  }
  interface CaptureButton {}
  interface SlitScan {
    'cameraId': string;
    'mirror': boolean;
    'mode': string;
    'slices': number;
  }
  interface TemporalisApp {}
}

declare global {


  interface HTMLCanvasRecorderElement extends Components.CanvasRecorder, HTMLStencilElement {}
  var HTMLCanvasRecorderElement: {
    prototype: HTMLCanvasRecorderElement;
    new (): HTMLCanvasRecorderElement;
  };

  interface HTMLCaptureButtonElement extends Components.CaptureButton, HTMLStencilElement {}
  var HTMLCaptureButtonElement: {
    prototype: HTMLCaptureButtonElement;
    new (): HTMLCaptureButtonElement;
  };

  interface HTMLSlitScanElement extends Components.SlitScan, HTMLStencilElement {}
  var HTMLSlitScanElement: {
    prototype: HTMLSlitScanElement;
    new (): HTMLSlitScanElement;
  };

  interface HTMLTemporalisAppElement extends Components.TemporalisApp, HTMLStencilElement {}
  var HTMLTemporalisAppElement: {
    prototype: HTMLTemporalisAppElement;
    new (): HTMLTemporalisAppElement;
  };
  interface HTMLElementTagNameMap {
    'canvas-recorder': HTMLCanvasRecorderElement;
    'capture-button': HTMLCaptureButtonElement;
    'slit-scan': HTMLSlitScanElement;
    'temporalis-app': HTMLTemporalisAppElement;
  }
}

declare namespace LocalJSX {
  interface CanvasRecorder {
    'canvas'?: HTMLCanvasElement;
  }
  interface CaptureButton {
    'onRecordEnd'?: (event: CustomEvent<any>) => void;
    'onRecordStart'?: (event: CustomEvent<any>) => void;
    'onSnapshot'?: (event: CustomEvent<any>) => void;
  }
  interface SlitScan {
    'cameraId'?: string;
    'mirror'?: boolean;
    'mode'?: string;
    'slices'?: number;
  }
  interface TemporalisApp {}

  interface IntrinsicElements {
    'canvas-recorder': CanvasRecorder;
    'capture-button': CaptureButton;
    'slit-scan': SlitScan;
    'temporalis-app': TemporalisApp;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'canvas-recorder': LocalJSX.CanvasRecorder & JSXBase.HTMLAttributes<HTMLCanvasRecorderElement>;
      'capture-button': LocalJSX.CaptureButton & JSXBase.HTMLAttributes<HTMLCaptureButtonElement>;
      'slit-scan': LocalJSX.SlitScan & JSXBase.HTMLAttributes<HTMLSlitScanElement>;
      'temporalis-app': LocalJSX.TemporalisApp & JSXBase.HTMLAttributes<HTMLTemporalisAppElement>;
    }
  }
}

