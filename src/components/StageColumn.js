import React from 'react';
import './StageColumn.css';
import LeadCard from './LeadCard';

export default function StageColumn({ stage, leads, onMoveLead, onUpdateLead, onDeleteLead, isFirstStage, isLastStage }) {
  const stageIcons = {
    'New Inquiry': '📨',
    'Contacted': '📞',
    'Tour Booked': '📅',
    'Application Submitted': '📝',
    'Enrolled': '✅'
  };

  const stageColors = {
    'New Inquiry': '#ec4899',
    'Contacted': '#f59e0b',
    'Tour Booked': '#8b5cf6',
    'Application Submitted': '#06b6d4',
    'Enrolled': '#10b981'
  };

  return (
    <div className="stage-column">
      <div 
        className="stage-header" 
        style={{ borderLeftColor: stageColors[stage] }}
      >
        <h3>
          <span className="stage-icon">{stageIcons[stage]}</span>
          {stage}
        </h3>
        <span className="stage-count">{leads.length}</span>
      </div>

      <div className="leads-list">
        {leads.length === 0 ? (
          <div className="empty-state">
            <p>No leads yet</p>
            <span className="empty-icon">→</span>
          </div>
        ) : (
          leads.map(lead => (
            <LeadCard
              key={lead.id}
              lead={lead}
              onMoveLead={onMoveLead}
              onUpdateLead={onUpdateLead}
              onDeleteLead={onDeleteLead}
              isFirstStage={isFirstStage}
              isLastStage={isLastStage}
              stageColor={stageColors[stage]}
            />
          ))
        )}
      </div>
    </div>
  );
}
