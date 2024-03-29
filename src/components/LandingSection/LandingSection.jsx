import React from "react";
import { Link } from "gatsby";
import ConfettiGenerator from "confetti-js";


class LandingSection extends React.Component {
   constructor(props) {
      super(props);
 }
 


fitToContainer(canvas){
  // Make it visually fill the positioned parent
  canvas.style.width ='100%';
  canvas.style.height='100%';
  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  return {width: canvas.width, height: canvas.height};
}

componentDidMount() {

	this.renderConfetti();
	
	
}
renderConfetti() {
	
	var id = this.props.id;
	 
	var confettiSettings = { target: this.props.id, rotate: true};
	if (this.props.colors != null){
		confettiSettings.colors =  this.props.colors;
	}
	if (this.props.size != null){
		confettiSettings.size =  this.props.size;
	} else { confettiSettings.size =  3;}
	if (this.props.shapes != null){
		confettiSettings.props =  this.props.shapes;
	} else {
		confettiSettings.props =  [ 'square'];
	}
	if (this.props.clock != null){
		confettiSettings.clock =  this.props.clock;
	} else {
		confettiSettings.clock =  1;
	}
	if (this.props.animate != null){
		confettiSettings.animate =  this.props.animate;
	} else {
		confettiSettings.animate =  false;
	}
	if (this.props.width != null){
		confettiSettings.width =  this.props.width;
	}
	if (this.props.max != null){
		confettiSettings.max =  this.props.max;
	} else {
		confettiSettings.max = 15;
	}

	var canvas = document.getElementById(this.props.id);
	var d = this.fitToContainer(canvas);
	confettiSettings.width = d.width;
	confettiSettings.height = d.height;
	let confetti = new ConfettiGenerator(confettiSettings);
	confetti.render();
}
  updateDimensions() {
  var self = this;
        // this.fitToContainer();
   
        self.renderConfetti;
    }

  render() {
    return (
        <canvas id={this.props.id} class={this.props.class}></canvas>
 
    );
  }

}

export default LandingSection;
