//make an isfront boolean -> these should be the only clickable slides to trigger animation
//man an isPresented boolean -> these should be the only clickable slides to trigger changing webpage to a different topic
//also need to make logic for the positional container to stay centered
//use the logic class to make transitions for every slide (after a timeout past the swap transition) using the current rotation + 60

export class Slide {
    _isFront;
    _element;
    _isPresented;
    _rotation;
    constructor(index) {
        if (index == 0) {
            this._isFront = true;
        }
        else {
            this._isFront = false;
        }

        if (index == 6) {
            this._isPresented = true;
        }
        else {
            this._isPresented = false;
        }

        this._element = document.getElementsByClassName("3d_logic")[index];
        this._rotation = index * 60;
    }

    get isPresented() {
        return this._isPresented;
    }

    get element() {
        return this._element;
    }

    get isFront() {
        return this._isFront;
    }
    transitioner() {
        if (!this._isFront && !this._isPresented) {
            setTimeout(() => {
                this._element.animate([
                    { transform: `perspective(1000px) translateY(60%) rotateY(${this._rotation}deg)` },
                    { transform: `perspective(1000px) translateY(60%) rotateY(  ${this._rotation + 60}deg)` }
                ], {
                    duration: 1000,
                    easing: "ease-in-out",
                });

                setTimeout(() => {
                    this._element.style.transform = `perspective(1000px) translateY(60%) rotateY(  ${this._rotation}deg )`;
                }, 990)

                this._rotation += 60;

                if (this._rotation % 360 == 0) {
                    this._isFront = true;
                }
            }, 1940); //update this
        }

        else if (this._isFront) {
            //isFront becomes false, is Presented becomes true
            this._element.style.animation = "put_new_main_slide 2s linear";
            setTimeout(() => {
                this.element.style.transformOrigin = "center 600% -150px";
                this.element.style.zIndex = "1";
            }, 1900);  

            this._isFront = false;
            this._isPresented = true;
        }
        else if (this._isPresented) {
            //becomes false for both presented and front after transition
            this._element.style.animation = "main_slide_mover 2s linear";

            setTimeout(() => {
                this.element.style.transformOrigin = "center -100px calc(max(-242px, -40vw))";
                this.element.style.zIndex = "2";
            }, 1900);

            this._isPresented = false;
            this._isFront = false;

           setTimeout(() => {
                this._element.animate([
                    { transform: `perspective(1000px) translateY(60%) rotateY(${this._rotation}deg)` },
                    { transform: `perspective(1000px) translateY(60%) rotateY(  ${this._rotation + 60}deg)` }
                ], {
                    duration: 1000,
                    easing: "ease-in-out",
                });

                 setTimeout(() => {
                    this._element.style.transform = `perspective(1000px) translateY(60%) rotateY(  ${this._rotation}deg )`;
                }, 990)

                this._rotation += 60;

                if (this._rotation % 360 == 0) {
                    this._isFront = true;
                }
            }, 1940); //update this
        }
    }
    
    phaseFixer() {
        //I MESSED UP THE ISPRESENTED AND ISFRONT VALUES -> CONFUSED THEM ALONG THE WAY -> IF AN ISSUE PRESENTS ITSELF THEN THIS IS WHY
        if(this._isPresented) {
            this._element.style.zIndex = "2";
        }
        else if ((this._rotation % 360) >= 300 || ((this._rotation % 360) >= 0 && (this._rotation % 360) <= 60) ) {
            this._element.style.zIndex = "1";
        }
        else if (this._isFront) {
            this._element.style.zIndex = "1";
        }
        else {
            this._element.style.zIndex = "0";
        }
     }
}