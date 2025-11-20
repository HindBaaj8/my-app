import React from "react";

class MoodSelector extends React.Component {
  handleClick = (mood) => {
    this.props.selectionnerMood(mood);
  };

  render() {
    return (
      <div className="mood-selector">
        {this.props.moods.map((mood, index) => (
          <button
            key={index}
            onClick={() => this.handleClick(mood)}
            style={{ backgroundColor: mood.color }}
            className="mood-button"
          >
            {mood.label}
          </button>
        ))}
      </div>
    );
  }
}

export default MoodSelector;