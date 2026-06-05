import React, { useState } from "react";
import "./RetroGallery.css";

const RetroGallery: React.FC = () => {
  // Aqui nós forçamos a ordem cronológica! O 5 (vídeo de dezembro) vai para o lugar certo.
  const items = [1, 2, 3, 4, 6, 7, 8, 9, 10, 5, 11, 12, 13, 14, 15];

  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  // Lista com as datas para aparecerem embaixo das fotos e no título da janela
  const momentDates: Record<number, string> = {
    1: "11/06/2025",
    2: "12/06/2025",
    3: "22/06/2025",
    4: "18/07/2025",
    6: "21/08/2025",
    7: "21/08/2025",
    8: "04/09/2025",
    9: "28/10/2025",
    10: "10/11/2025",
    5: "06/12/2025", // O vídeo
    11: "28-11-2025", // Como não tinha data, deixei apenas o mês
    12: "31/12/2025",
    13: "31/01/2026",
    14: "12/04/2026",
    15: "12/04/2026",
  };

  const momentTexts: Record<number, string> = {
    1: "O inicio do nosso amor ❤.",
    2: "A primeira foto que você mandou, o dia que me apaixonei.",
    3: "Nossa primeira foto juntos.",
    4: "Meu mural <3",
    6: "Mal sabia eu que tinha ganho na mega sena",
    7: "Te amo mais do que tudo.",
    8: "O dia que eu mais me arrependo de não estar ao seu lado...😭",
    9: "EU AMO ESSA FOTO PUTA MERDA.",
    10: "Te amo muito muito muitao.",
    5: "Melhor momento da minha vida",
    11: "Amo seu sorisso, amo seu jeito, amo seus olhos, eu amo tudo de você, principalmente seus defeitos.",
    12: "Nosso primeiro natal juntos, de muitos <3",
    13: "Minha motorista favorita",
    14: "Minha companhia favorita ❤",
    15: "Obrigado pelo seu amor, quero passar todos os dias dos namorados ao seu lado. Que venha mais 500 dias dos namorados ❤",
  };

  const closeModal = () => setSelectedItem(null);

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h1>Nosso Mural ❤</h1>
        <p>Registros da nossa história</p>
      </header>

      <main className="gallery-grid">
        {items.map((num) => {
          if (num === 5) {
            return (
              <div
                key={num}
                className="retro-photo-frame"
                onClick={() => setSelectedItem(num)}
              >
                <div className="photo-wrapper" style={{ cursor: "pointer" }}>
                  <video className="retro-image">
                    <source src="/imagens/video5.mp4" type="video/mp4" />
                  </video>
                  <div className="noise-overlay"></div>
                </div>
                <div className="photo-caption">{momentDates[num]} 🎬</div>
              </div>
            );
          }

          return (
            <div
              key={num}
              className="retro-photo-frame"
              onClick={() => setSelectedItem(num)}
            >
              <div className="photo-wrapper" style={{ cursor: "pointer" }}>
                <img
                  src={
                    num === 12 ? "/imagens/natal.jpg" : `/imagens/${num}.jpg`
                  }
                  alt={`Lembrança ${num}`}
                  className="retro-image"
                  loading="lazy"
                />
                <div className="noise-overlay"></div>
              </div>
              <div className="photo-caption">{momentDates[num]}</div>
            </div>
          );
        })}
      </main>

      {selectedItem !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>

            <div className="modal-media">
              {selectedItem === 5 ? (
                <video controls autoPlay className="modal-video">
                  <source src="/imagens/video5.mp4" type="video/mp4" />
                </video>
              ) : (
                <img
                  src={
                    selectedItem === 12
                      ? "/imagens/natal.jpg"
                      : `/imagens/${selectedItem}.jpg`
                  }
                  alt={`Momento ${selectedItem} ampliado`}
                  className="modal-image"
                />
              )}
            </div>

            <div className="modal-text">
              <h2>{momentDates[selectedItem]}</h2>
              <p>
                {momentTexts[selectedItem] ||
                  "Mais uma lembrança perfeita ao seu lado. Te amo!"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RetroGallery;
