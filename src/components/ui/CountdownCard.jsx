import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

export default function CountdownCard({ title, dateStart, dateLabel, attendees = 12, image }) {
  const [timeLeft, setTimeLeft] = useState(() =>
    Math.max(0, Math.floor((+dateStart - Date.now()) / 1000))
  );

  useEffect(() => {
    const update = () => {
      setTimeLeft(Math.max(0, Math.floor((+dateStart - Date.now()) / 1000)));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [dateStart]);

  const days    = Math.floor(timeLeft / 86400);
  const hours   = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const pad = (n) => n.toString().padStart(2, '0');

  const units = [
    { value: days,    label: 'Jours'  },
    { value: hours,   label: 'Heures' },
    { value: minutes, label: 'Min'    },
    { value: seconds, label: 'Sec'    },
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0d1b35 0%, #111f3a 60%, #0a1628 100%)',
      border: '1px solid rgba(37,99,235,0.3)',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
    }}>

      {/* ── HEADER ── */}
      <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <h3 style={{ color: '#F9FAFB', fontSize: '1rem', fontWeight: 700, lineHeight: 1.45, marginBottom: '1rem' }}>
          {title}
        </h3>
        {image && (
          <div style={{
            width: '100%',
            height: '130px',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '1rem',
          }}>
            <img
              src={image}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>
            <Calendar size={13} color="#44CCFF" />
            <span>{dateLabel}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
            <MapPin size={13} color="#44CCFF" />
            <span style={{ color: '#44CCFF', fontWeight: 500 }}>Paris</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>
            <Users size={13} color="#44CCFF" />
            <span>{attendees} places disponibles</span>
          </div>
        </div>
      </div>

      {/* ── COUNTDOWN ── */}
      <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          <Clock size={12} color="#44CCFF" />
          <span>La prochaine session commence dans</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
          {units.map((unit) => (
            <div key={unit.label} style={{
              background: 'rgba(37,99,235,0.1)',
              border: '1px solid rgba(68,204,255,0.12)',
              borderRadius: '10px',
              padding: '0.75rem 0.25rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#F9FAFB', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                {pad(unit.value)}
              </div>
              <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.3rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ padding: '1.5rem' }}>
        <Link
          to="/contact"
          style={{
            display: 'block',
            background: 'linear-gradient(135deg, #2563EB, #1d4ed8)',
            color: '#fff',
            textAlign: 'center',
            padding: '0.9rem',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '0.95rem',
            textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(37,99,235,0.35)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.35)';
          }}
        >
          Réserver votre place
        </Link>
      </div>

    </div>
  );
}
