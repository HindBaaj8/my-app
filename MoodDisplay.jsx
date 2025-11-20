import React from "react";

class MoodDisplay extends React.Component {
  render() {
    const { currentMood, reinitialiser } = this.props;

    return (
      <div 
        className="mood-display"
        style={{ 
          backgroundColor: currentMood ? currentMood.color : "#f0f0f0" 
        }}
      >
        {currentMood ? (
          <p>Aujourd'hui, je me sens <strong>{currentMood.value}</strong> !</p>
        ) : (
          <p>Aujourd'hui, je me sens <strong>Aucune humeur</strong> 😶 !</p>
        )}
        
        <div className="buttons">
          <button onClick={reinitialiser} className="btn-reinitialiser">
            🔄 Réinitialiser
          </button>
          {currentMood && (
            <button className="btn-effacer">
              ❌ Effacer l'humeur
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default MoodDisplay;