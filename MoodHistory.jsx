import React from "react";

class MoodHistory extends React.Component {
  render() {
    const { history, moods, effacerHistorique } = this.props;

    return (
      <div className="mood-history">
        <h3>😊 Historique des humeurs</h3>
        <p className="subtitle">Moods sélectionnés de la journée</p>
        
        <div className="history-items">
          {history.map((mood, index) => {
            const moodData = moods.find(m => m.value === mood.value);
            return (
              <span
                key={index}
                className="history-item"
                style={{ backgroundColor: moodData.color }}
              >
                {mood.value}
              </span>
            );[]
          })}
        </div>
        
        {history.length > 0 && (
          <button onClick={effacerHistorique} className="btn-effacer-historique">
            🗑️ Effacer l'historique
          </button>
        )}
      </div>
    );
  }
}

export default MoodHistory;