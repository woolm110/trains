import {Component, Input, OnDestroy} from 'angular2/core';

@Component({
    selector: 'my-spinner',
    template: `
    <div [hidden]="!isDelayedRunning" class="spinner">  
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>`,
    styles: [`
      .spinner {
        width: 40px;
        height: 40px;

        position: relative;
        margin: 100px auto;
      }

      .double-bounce1, .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #333;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;

        -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
        animation: sk-bounce 2.0s infinite ease-in-out;
      }

      .double-bounce2 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
      }

      @-webkit-keyframes sk-bounce {
        0%, 100% { -webkit-transform: scale(0.0) }
        50% { -webkit-transform: scale(1.0) }
      }

      @keyframes sk-bounce {
        0%, 100% {
          transform: scale(0.0);
          -webkit-transform: scale(0.0);
        } 50% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
          }
      }
    `]
})

export class SpinnerComponent implements OnDestroy {  
    private currentTimeout: number;
    private isDelayedRunning: boolean = false;

    @Input()
    public delay: number = 300;

    @Input()
    public set isRunning(value: boolean) {
        if (!value) {
            this.cancelTimeout();
            return this.isDelayedRunning = false;
        }

        if (this.currentTimeout) {
            return;
        }

        this.currentTimeout = setTimeout(() => {
            this.isDelayedRunning = value;
            this.cancelTimeout();
        }, this.delay);
    }

    private cancelTimeout(): void {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    }

    ngOnDestroy(): any {
        this.cancelTimeout();
    }
}
