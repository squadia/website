import React from 'react';

/**
 * VideoPlaceholder Component
 * A consistent placeholder for videos with a premium aesthetic
 */
const VideoPlaceholder = ({ text = "Vidéo à venir", marginBottom = "2rem" }) => {
  return (
    <div style={{ 
      width: '100%', 
      aspectRatio: '16/9', 
      backgroundColor: '#0D0D25', 
      borderRadius: '12px', 
      border: '1px solid rgba(68,204,255,0.2)', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      marginBottom: marginBottom,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      group: 'true'
    }}>
      {/* Play Button Icon Placeholder */}
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: 'rgba(68,204,255,0.1)',
        border: '1px solid rgba(68,204,255,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          width: '0',
          height: '0',
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
          borderLeft: '15px solid #44CCFF',
          marginLeft: '4px'
        }} />
      </div>
      
      <span style={{ 
        color: 'rgba(255,255,255,0.4)', 
        fontSize: '0.85rem', 
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }}>
        {text}
      </span>

      {/* Decorative corners */}
      <div style={{ position: 'absolute', top: '10px', left: '10px', width: '15px', height: '15px', borderTop: '2px solid rgba(68,204,255,0.3)', borderLeft: '2px solid rgba(68,204,255,0.3)' }} />
      <div style={{ position: 'absolute', top: '10px', right: '10px', width: '15px', height: '15px', borderTop: '2px solid rgba(68,204,255,0.3)', borderRight: '2px solid rgba(68,204,255,0.3)' }} />
      <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '15px', height: '15px', borderBottom: '2px solid rgba(68,204,255,0.3)', borderLeft: '2px solid rgba(68,204,255,0.3)' }} />
      <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '15px', height: '15px', borderBottom: '2px solid rgba(68,204,255,0.3)', borderRight: '2px solid rgba(68,204,255,0.3)' }} />
    </div>
  );
};

export default VideoPlaceholder;
