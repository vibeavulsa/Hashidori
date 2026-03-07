import './Hero.css'

export default function Hero() {
  const scrollToPortfolio = e => {
    e.preventDefault()
    document.querySelector('#portifolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = e => {
    e.preventDefault()
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* Background layers */}
      <div className="hero-bg-layer hero-waves" aria-hidden="true" />
      <div className="hero-bg-layer hero-gradient" aria-hidden="true" />

      {/* Floating kanji — subtle, single accent */}
      <span className="hero-deco hero-deco--1" aria-hidden="true">鳥</span>
      <span className="hero-deco hero-deco--2" aria-hidden="true">花</span>

      {/* Hummingbirds — asset SVGs */}
      <div className="hero-bird-wrap hero-bird-wrap--1" aria-hidden="true">
        <Hummingbird1SVG />
      </div>
      <div className="hero-bird-wrap hero-bird-wrap--2" aria-hidden="true">
        <Hummingbird2SVG />
      </div>

      {/* Content card */}
      <div className="hero-content fade-up">
        {/* Pre-title */}
        <p className="hero-pretitle">
          <span className="hero-pretitle-line" />
          <span className="hero-pretitle-jp">橋鳥</span>
          <span className="hero-pretitle-line" />
        </p>

        <h1 className="hero-heading">
          Arte Japonesa<br />
          <em>Gravada na Pele</em>
        </h1>

        <p className="hero-sub">
          Tatuagens tradicionais e vintage japonesas — onde cada traço<br className="br-only-desktop" />
          carrega a alma milenar da arte do Japão.
        </p>

        <div className="hero-actions">
          <button className="hero-btn hero-btn--primary" onClick={scrollToPortfolio}>
            Ver Portifólio
          </button>
          <button className="hero-btn hero-btn--secondary" onClick={scrollToContact}>
            Agendar Sessão
          </button>
        </div>

        {/* Stats — glassmorphism panel */}
        <div className="hero-stats glass-panel">
          <div className="hero-stat">
            <strong>8+</strong>
            <span>Anos de experiência</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>500+</strong>
            <span>Trabalhos realizados</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>100%</strong>
            <span>Arte personalizada</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}

/* ── Hummingbird 1 — potrace silhouette from assets/hummingbird1.svg ──────── */
function Hummingbird1SVG() {
  return (
    <svg
      className="bird-svg"
      viewBox="0 0 1280 1168"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="translate(0,1168) scale(0.1,-0.1)" fill="currentColor" stroke="none">
        <path d="M12544 11670 c-229 -24 -457 -97 -726 -231 -164 -81 -301 -163 -668
-399 -151 -97 -381 -240 -510 -317 -856 -509 -1048 -626 -1221 -741 -107 -72
-254 -179 -328 -238 -73 -60 -188 -153 -255 -207 -133 -108 -327 -239 -668
-450 -350 -216 -394 -253 -828 -682 -212 -209 -425 -412 -475 -452 -199 -157
-357 -241 -508 -271 -77 -15 -83 -15 -248 13 -162 26 -272 30 -319 11 -10 -4
-21 3 -32 21 -45 76 -241 351 -323 454 -273 338 -554 517 -903 575 -118 20
-404 23 -542 5 -134 -17 -320 -54 -495 -100 -501 -130 -671 -171 -765 -187
l-105 -17 -260 51 c-817 161 -1152 212 -1550 231 -221 11 -491 2 -669 -24 -60
-8 -114 -15 -119 -15 -6 0 -8 -2 -6 -4 2 -3 45 -10 94 -16 839 -105 1395 -223
2080 -441 490 -156 618 -207 740 -293 182 -131 346 -384 494 -761 34 -88 81
-207 103 -265 117 -298 306 -613 559 -930 199 -249 247 -326 432 -695 203
-402 240 -461 518 -822 88 -114 191 -254 229 -311 72 -108 170 -290 170 -315
0 -8 -44 -41 -97 -73 -141 -83 -359 -231 -482 -327 -122 -94 -401 -368 -485
-474 -199 -254 -335 -529 -425 -862 l-20 -74 53 6 c29 3 95 23 147 45 101 43
153 57 169 47 6 -3 -10 -36 -39 -78 -79 -118 -179 -300 -266 -487 -93 -201
-109 -239 -103 -245 2 -3 34 -9 70 -14 70 -10 172 -3 367 23 63 9 127 16 142
16 27 0 28 -1 17 -31 -6 -17 -55 -121 -109 -230 -103 -209 -148 -323 -168
-424 -7 -33 -15 -68 -17 -77 -5 -16 3 -18 64 -18 138 0 278 63 517 230 146
102 256 172 262 167 1 -2 -11 -41 -28 -88 -103 -280 -135 -452 -126 -668 7
-167 11 -181 47 -181 39 0 147 37 209 72 80 46 188 136 261 219 114 129 244
260 288 291 l42 29 0 -214 c0 -208 15 -360 40 -407 17 -32 51 -11 161 100 144
144 168 149 155 30 -8 -66 4 -100 33 -100 13 0 26 20 46 73 124 319 320 642
735 1212 113 154 256 357 319 450 63 94 116 172 118 174 1 2 12 -4 23 -14 18
-16 21 -16 44 -2 49 32 127 157 291 463 59 109 111 204 117 209 6 6 7 -9 2
-41 -4 -35 -3 -54 6 -59 16 -10 17 -8 56 101 209 585 270 1338 159 1979 -20
114 -68 316 -101 419 l-25 79 33 56 c50 84 188 218 303 293 114 75 207 122
484 249 228 105 337 162 441 232 90 60 216 180 266 253 30 44 60 67 168 135
271 169 476 329 664 518 94 95 112 109 147 114 61 7 152 50 197 93 22 22 131
143 243 269 247 281 370 401 548 533 75 56 197 146 270 201 236 176 356 295
463 458 63 94 108 187 94 191 -33 12 -1179 -170 -1294 -205 -15 -4 -11 6 19
48 193 265 259 401 335 692 27 103 32 111 72 145 146 121 216 242 218 377 1
37 6 44 80 107 43 37 126 120 184 184 121 132 537 637 567 689 11 19 27 76 35
127 19 120 50 184 163 338 166 226 210 333 185 459 l-6 31 -87 -1 c-47 -1
-118 -5 -157 -9z" />
      </g>
    </svg>
  )
}

/* ── Hummingbird 2 — potrace silhouette from assets/hummingbird2.svg ──────── */
function Hummingbird2SVG() {
  return (
    <svg
      className="bird-svg"
      viewBox="0 0 1280 1074"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="translate(0,1074) scale(0.1,-0.1)" fill="currentColor" stroke="none">
        <path d="M7 10733 c-4 -6 23 -18 66 -28 864 -205 1272 -342 1777 -595 487
-245 736 -452 875 -730 50 -100 70 -155 125 -350 114 -399 211 -636 385 -949
117 -210 212 -438 295 -711 169 -551 235 -723 426 -1110 217 -441 433 -793
836 -1363 323 -458 401 -582 453 -722 15 -38 35 -79 45 -90 13 -15 19 -41 22
-107 4 -71 10 -97 36 -150 61 -125 102 -142 226 -92 60 24 66 29 66 54 0 16
-5 41 -10 55 -8 20 12 7 76 -54 48 -45 90 -81 94 -81 9 0 216 -229 285 -315
162 -202 264 -403 325 -639 32 -128 52 -260 81 -546 35 -354 86 -611 163 -835
61 -180 104 -409 126 -670 27 -328 33 -386 52 -475 11 -52 28 -111 38 -130 25
-48 84 -103 106 -98 40 7 70 105 114 368 58 349 76 531 91 909 16 415 2 836
-67 2031 -34 576 -39 1251 -12 1415 25 150 53 231 97 277 33 35 46 42 110 54
90 17 109 30 146 100 46 88 57 93 238 109 159 14 178 19 277 76 32 19 45 20
140 13 188 -14 207 -8 231 65 26 80 64 98 225 106 204 11 239 26 284 128 43
98 99 137 197 137 92 0 123 38 123 155 0 53 4 69 21 86 20 20 26 21 148 13 69
-5 160 -8 203 -7 131 3 190 50 204 162 3 31 11 64 15 73 13 25 65 36 214 47
248 18 339 79 352 234 9 99 10 100 111 92 76 -6 95 -4 147 15 79 30 151 99
160 155 18 110 4 105 450 159 143 17 215 39 250 76 22 23 27 41 36 125 16 156
29 173 239 304 134 85 160 107 199 176 36 61 151 205 341 425 78 91 190 221
249 289 130 151 291 352 291 363 0 15 -98 8 -232 -17 -204 -38 -457 -100
-1133 -280 -341 -90 -699 -182 -795 -204 -96 -22 -187 -44 -202 -50 -43 -16
-340 -37 -818 -56 -278 -12 -656 -36 -783 -50 -150 -17 -233 -19 -242 -5 -7
12 44 118 194 405 61 116 138 275 172 355 83 196 144 314 254 499 96 162 128
221 139 259 6 19 4 22 -21 22 -118 -1 -556 -280 -1368 -871 -769 -561 -1116
-769 -1471 -883 -164 -53 -260 -66 -539 -72 l-260 -6 -145 223 c-251 388 -649
998 -753 1154 -229 342 -316 439 -497 557 -318 206 -522 237 -1351 208 l-276
-10 -354 166 c-468 219 -565 259 -834 349 -343 114 -867 241 -1191 289 -148
22 -280 31 -287 19z m5523 -6773 c13 -8 13 -10 -1 -10 -9 0 -23 -8 -32 -18
-16 -17 -15 -20 11 -52 26 -31 27 -35 13 -50 -15 -15 -18 -14 -48 9 -29 23
-30 27 -17 45 8 11 14 33 14 47 0 25 7 31 40 38 3 0 12 -4 20 -9z" />
      </g>
    </svg>
  )
}
