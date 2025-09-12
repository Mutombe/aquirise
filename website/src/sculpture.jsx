import React, { useState } from 'react';

const JigsawSculpturalFlow = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1400 900"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Precision gradients matching SharpSculpturalFlow palette */}
          <linearGradient id="jigsaw-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="12%" stopColor="#fefefe" stopOpacity="0.95" />
            <stop offset="28%" stopColor="#fafbfc" stopOpacity="0.92" />
            <stop offset="45%" stopColor="#f6f7f8" stopOpacity="0.88" />
            <stop offset="62%" stopColor="#f1f3f4" stopOpacity="0.83" />
            <stop offset="78%" stopColor="#eceff1" stopOpacity="0.77" />
            <stop offset="92%" stopColor="#e8eaed" stopOpacity="0.70" />
            <stop offset="100%" stopColor="#e3e5e8" stopOpacity="0.65" />
          </linearGradient>
          
          <linearGradient id="jigsaw-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.96" />
            <stop offset="18%" stopColor="#fcfcfd" stopOpacity="0.92" />
            <stop offset="35%" stopColor="#f8f9fa" stopOpacity="0.88" />
            <stop offset="55%" stopColor="#f3f4f6" stopOpacity="0.82" />
            <stop offset="75%" stopColor="#eef0f2" stopOpacity="0.76" />
            <stop offset="100%" stopColor="#e6e8eb" stopOpacity="0.68" />
          </linearGradient>

          <linearGradient id="jigsaw-gradient-3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.94" />
            <stop offset="22%" stopColor="#fafbfc" stopOpacity="0.88" />
            <stop offset="45%" stopColor="#f5f6f7" stopOpacity="0.82" />
            <stop offset="68%" stopColor="#f0f1f3" stopOpacity="0.75" />
            <stop offset="88%" stopColor="#eaecef" stopOpacity="0.68" />
            <stop offset="100%" stopColor="#e4e6e9" stopOpacity="0.58" />
          </linearGradient>

          <linearGradient id="jigsaw-gradient-4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#f8f9fa" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#e9ecef" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#dee2e6" stopOpacity="0.65" />
          </linearGradient>

          <radialGradient id="puzzle-piece-glow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#f8f9fa" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#e9ecef" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#dee2e6" stopOpacity="0.65" />
          </radialGradient>

          {/* Ultra-precision shadow system matching SharpSculpturalFlow */}
          <filter id="jigsaw-shadow" x="-150%" y="-150%" width="400%" height="400%">
            <feDropShadow dx="0.5" dy="1" stdDeviation="0.5" floodOpacity="0.08" floodColor="#000000"/>
            <feDropShadow dx="1" dy="3" stdDeviation="2" floodOpacity="0.06" floodColor="#000000"/>
            <feDropShadow dx="2" dy="8" stdDeviation="8" floodOpacity="0.04" floodColor="#000000"/>
            <feDropShadow dx="0" dy="16" stdDeviation="20" floodOpacity="0.02" floodColor="#000000"/>
          </filter>
        </defs>

        {/* Full coverage jigsaw pattern - Row 1 */}
        <path d="M-50,-50 L120,-50 Q140,-70 160,-50 L220,-50 L220,20 Q240,40 220,60 L220,120 L160,120 Q140,140 120,120 L60,120 Q40,100 60,80 L60,20 Q80,0 60,-20 L60,-50 L-50,-50 Z" fill="url(#jigsaw-gradient-1)" filter="url(#jigsaw-shadow)"/>
        <path d="M220,-50 L390,-50 L390,20 L440,20 Q460,40 440,60 L440,120 Q420,140 440,160 L440,220 L390,220 L390,160 L340,160 Q320,140 340,120 L340,60 Q360,40 340,20 L340,-50 L220,-50 Z" fill="url(#jigsaw-gradient-2)" filter="url(#jigsaw-shadow)"/>
        <path d="M440,-50 L610,-50 Q630,-70 650,-50 L710,-50 L710,20 Q730,40 710,60 L710,120 L650,120 Q630,140 610,120 L560,120 L560,170 Q540,190 520,170 L520,120 L470,120 Q450,100 470,80 L470,20 Q490,0 470,-20 L470,-50 L440,-50 Z" fill="url(#jigsaw-gradient-3)" filter="url(#jigsaw-shadow)"/>
        <path d="M710,-50 L880,-50 L880,20 Q900,40 880,60 L880,120 L930,120 Q950,140 930,160 L930,220 Q910,240 930,260 L930,320 L880,320 L880,260 L830,260 Q810,240 830,220 L830,160 Q850,140 830,120 L830,60 Q850,40 830,20 L830,-50 L710,-50 Z" fill="url(#jigsaw-gradient-4)" filter="url(#jigsaw-shadow)"/>
        <path d="M930,-50 L1100,-50 Q1120,-70 1140,-50 L1200,-50 L1200,20 L1250,20 Q1270,40 1250,60 L1250,120 Q1230,140 1250,160 L1250,220 L1200,220 L1200,160 Q1180,140 1200,120 L1200,60 Q1220,40 1200,20 L1200,-50 L1450,-50 L1450,220 L1350,220 Q1330,240 1350,260 L1350,320 L1300,320 Q1280,300 1300,280 L1300,220 L930,220 L930,-50 Z" fill="url(#jigsaw-gradient-1)" filter="url(#jigsaw-shadow)"/>

        {/* Row 2 */}
        <path d="M-50,120 L60,120 Q80,140 60,160 L60,220 Q40,240 60,260 L60,320 L120,320 Q140,340 120,360 L120,420 L60,420 Q40,440 20,420 L-20,420 Q-40,400 -20,380 L-20,320 Q0,300 -20,280 L-20,220 Q0,200 -20,180 L-20,120 L-50,120 Z" fill="url(#jigsaw-gradient-2)" filter="url(#jigsaw-shadow)"/>
        <path d="M60,220 L220,220 L220,290 Q240,310 220,330 L220,390 L270,390 Q290,410 270,430 L270,490 Q250,510 270,530 L270,590 L220,590 L220,530 L170,530 Q150,510 170,490 L170,430 Q190,410 170,390 L170,330 Q190,310 170,290 L170,220 L60,220 Z" fill="url(#jigsaw-gradient-3)" filter="url(#jigsaw-shadow)"/>
        <path d="M270,220 L440,220 Q460,200 480,220 L540,220 L540,290 L590,290 Q610,310 590,330 L590,390 Q570,410 590,430 L590,490 L540,490 L540,430 Q520,410 540,390 L540,330 Q560,310 540,290 L540,220 L270,220 Z" fill="url(#jigsaw-gradient-4)" filter="url(#jigsaw-shadow)"/>
        <path d="M540,220 L710,220 L710,290 Q730,310 710,330 L710,390 L760,390 Q780,410 760,430 L760,490 Q740,510 760,530 L760,590 L710,590 L710,530 L660,530 Q640,510 660,490 L660,430 Q680,410 660,390 L660,330 Q680,310 660,290 L660,220 L540,220 Z" fill="url(#jigsaw-gradient-1)" filter="url(#jigsaw-shadow)"/>

        {/* Row 3 - Center area with complex interlocking */}
        <path d="M-50,420 L120,420 L120,490 Q140,510 120,530 L120,590 L170,590 Q190,610 170,630 L170,690 Q150,710 170,730 L170,790 L120,790 L120,730 L70,730 Q50,710 70,690 L70,630 Q90,610 70,590 L70,530 Q90,510 70,490 L70,420 L-50,420 Z" fill="url(#jigsaw-gradient-3)" filter="url(#jigsaw-shadow)"/>
        <path d="M170,420 L340,420 Q360,400 380,420 L440,420 L440,490 L490,490 Q510,510 490,530 L490,590 Q470,610 490,630 L490,690 L440,690 L440,630 Q420,610 440,590 L440,530 Q460,510 440,490 L440,420 L170,420 Z" fill="url(#jigsaw-gradient-4)" filter="url(#jigsaw-shadow)"/>
        <path d="M490,420 L660,420 L660,490 Q680,510 660,530 L660,590 L710,590 Q730,610 710,630 L710,690 Q690,710 710,730 L710,790 L660,790 L660,730 L610,730 Q590,710 610,690 L610,630 Q630,610 610,590 L610,530 Q630,510 610,490 L610,420 L490,420 Z" fill="url(#jigsaw-gradient-1)" filter="url(#jigsaw-shadow)"/>

        {/* Extended coverage to right edge */}
        <path d="M710,320 L880,320 Q900,300 920,320 L980,320 L980,390 Q1000,410 980,430 L980,490 L1030,490 Q1050,510 1030,530 L1030,590 Q1010,610 1030,630 L1030,690 L980,690 L980,630 L930,630 Q910,610 930,590 L930,530 Q950,510 930,490 L930,430 Q950,410 930,390 L930,320 L710,320 Z" fill="url(#jigsaw-gradient-2)" filter="url(#jigsaw-shadow)"/>
        <path d="M1030,220 L1200,220 L1200,290 L1250,290 Q1270,310 1250,330 L1250,390 Q1230,410 1250,430 L1250,490 L1200,490 L1200,430 Q1180,410 1200,390 L1200,330 Q1220,310 1200,290 L1200,220 L1450,220 L1450,490 L1350,490 Q1330,510 1350,530 L1350,590 L1300,590 Q1280,570 1300,550 L1300,490 L1030,490 L1030,220 Z" fill="url(#jigsaw-gradient-3)" filter="url(#jigsaw-shadow)"/>

        {/* Bottom rows for complete coverage */}
        <path d="M-50,790 L170,790 L170,860 Q190,880 170,900 L170,950 L220,950 Q240,970 220,990 L220,1050 L170,1050 L170,990 L120,990 Q100,970 120,950 L120,900 Q140,880 120,860 L120,790 L-50,790 Z" fill="url(#jigsaw-gradient-4)" filter="url(#jigsaw-shadow)"/>
        <path d="M220,790 L390,790 Q410,770 430,790 L490,790 L490,860 L540,860 Q560,880 540,900 L540,950 Q520,970 540,990 L540,1050 L490,1050 L490,990 Q470,970 490,950 L490,900 Q510,880 490,860 L490,790 L220,790 Z" fill="url(#jigsaw-gradient-1)" filter="url(#jigsaw-shadow)"/>
        <path d="M540,790 L710,790 L710,860 Q730,880 710,900 L710,950 L760,950 Q780,970 760,990 L760,1050 Q740,1070 760,1090 L760,1150 L710,1150 L710,1090 L660,1090 Q640,1070 660,1050 L660,990 Q680,970 660,950 L660,900 Q680,880 660,860 L660,790 L540,790 Z" fill="url(#jigsaw-gradient-2)" filter="url(#jigsaw-shadow)"/>
        <path d="M760,590 L930,590 Q950,570 970,590 L1030,590 L1030,660 Q1050,680 1030,700 L1030,760 L980,760 Q960,780 980,800 L980,860 L930,860 L930,800 L880,800 Q860,780 880,760 L880,700 Q900,680 880,660 L880,590 L760,590 Z" fill="url(#jigsaw-gradient-3)" filter="url(#jigsaw-shadow)"/>
        <path d="M1030,590 L1200,590 L1200,660 L1250,660 Q1270,680 1250,700 L1250,760 Q1230,780 1250,800 L1250,860 L1200,860 L1200,800 L1150,800 Q1130,780 1150,760 L1150,700 Q1170,680 1150,660 L1150,590 L1450,590 L1450,860 L1350,860 Q1330,880 1350,900 L1350,950 L1300,950 Q1280,930 1300,910 L1300,860 L1030,860 L1030,590 Z" fill="url(#jigsaw-gradient-4)" filter="url(#jigsaw-shadow)"/>

        {/* Extended bottom coverage */}
        <path d="M760,860 L930,860 Q950,840 970,860 L1030,860 L1030,930 Q1050,950 1030,970 L1030,1030 L980,1030 Q960,1050 980,1070 L980,1130 L930,1130 L930,1070 L880,1070 Q860,1050 880,1030 L880,970 Q900,950 880,930 L880,860 L760,860 Z" fill="url(#jigsaw-gradient-1)" filter="url(#jigsaw-shadow)"/>
        <path d="M1030,860 L1450,860 L1450,1130 L1350,1130 Q1330,1150 1350,1170 L1350,1230 L1300,1230 Q1280,1210 1300,1190 L1300,1130 L1250,1130 L1250,1080 Q1230,1060 1250,1040 L1250,980 Q1270,960 1250,940 L1250,860 L1030,860 Z" fill="url(#jigsaw-gradient-2)" filter="url(#jigsaw-shadow)"/>

        {/* Additional scattered pieces for complexity */}
        <path d="M880,120 L1030,120 Q1050,100 1070,120 L1130,120 L1130,190 L1180,190 Q1200,210 1180,230 L1180,290 Q1160,310 1180,330 L1180,390 L1130,390 L1130,330 Q1110,310 1130,290 L1130,230 Q1150,210 1130,190 L1130,120 L880,120 Z" fill="url(#puzzle-piece-glow)" filter="url(#jigsaw-shadow)" opacity="0.88"/>
        
        <path d="M1180,390 L1330,390 L1330,460 Q1350,480 1330,500 L1330,560 L1380,560 Q1400,580 1380,600 L1380,660 Q1360,680 1380,700 L1380,760 L1330,760 L1330,700 L1280,700 Q1260,680 1280,660 L1280,600 Q1300,580 1280,560 L1280,500 Q1300,480 1280,460 L1280,390 L1180,390 Z" fill="url(#puzzle-piece-glow)" filter="url(#jigsaw-shadow)" opacity="0.82"/>

        {/* Small intricate pieces for refined detail */}
        <path d="M380,190 L480,190 Q500,170 520,190 L580,190 L580,240 Q600,260 580,280 L580,340 L530,340 Q510,360 490,340 L430,340 Q410,320 430,300 L430,240 Q450,220 430,200 L430,190 L380,190 Z" fill="url(#jigsaw-gradient-3)" filter="url(#jigsaw-shadow)" opacity="0.9"/>
        
        <path d="M680,490 L780,490 L780,540 Q800,560 780,580 L780,640 L830,640 Q850,660 830,680 L830,740 Q810,760 830,780 L830,840 L780,840 L780,780 L730,780 Q710,760 730,740 L730,680 Q750,660 730,640 L730,580 Q750,560 730,540 L730,490 L680,490 Z" fill="url(#jigsaw-gradient-4)" filter="url(#jigsaw-shadow)" opacity="0.86"/>

        {/* Connecting elements throughout */}
        <path d="M120,590 L270,590 Q290,570 310,590 L370,590 L370,640 L420,640 Q440,660 420,680 L420,740 Q400,760 420,780 L420,840 L370,840 L370,780 Q350,760 370,740 L370,680 Q390,660 370,640 L370,590 L120,590 Z" fill="url(#jigsaw-gradient-1)" filter="url(#jigsaw-shadow)" opacity="0.84"/>

        {/* Refined connection lines with matching precision gradients */}
        <path d="M200,80 Q220,70 240,80 Q260,90 280,80" stroke="url(#jigsaw-gradient-1)" strokeWidth="1.5" fill="none" opacity="0.7" strokeDasharray="25,15"/>
        <path d="M450,250 Q470,240 490,250 Q510,260 530,250" stroke="url(#jigsaw-gradient-2)" strokeWidth="1.5" fill="none" opacity="0.6" strokeDasharray="20,10"/>
        <path d="M650,420 Q670,410 690,420 Q710,430 730,420" stroke="url(#jigsaw-gradient-3)" strokeWidth="1.5" fill="none" opacity="0.7" strokeDasharray="25,15"/>
        <path d="M850,650 Q870,640 890,650 Q910,660 930,650" stroke="url(#jigsaw-gradient-4)" strokeWidth="1.5" fill="none" opacity="0.6" strokeDasharray="20,10"/>
        <path d="M1050,280 Q1070,270 1090,280 Q1110,290 1130,280" stroke="url(#jigsaw-gradient-1)" strokeWidth="1.5" fill="none" opacity="0.7" strokeDasharray="25,15"/>

        {/* Precision accent lines */}
        <path d="M0,200 L1400,240" stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="30,20"/>

        {/* Subtle connecting dots in matching neutral tones */}
        <circle cx="175" cy="65" r="2.5" fill="#e3e5e8" opacity="0.4"/>
        <circle cx="425" cy="135" r="2.5" fill="#e6e8eb" opacity="0.4"/>
        <circle cx="675" cy="205" r="2.5" fill="#e4e6e9" opacity="0.4"/>
        <circle cx="925" cy="275" r="2.5" fill="#e3e5e8" opacity="0.4"/>
        <circle cx="275" cy="345" r="2.5" fill="#e6e8eb" opacity="0.4"/>
        <circle cx="525" cy="415" r="2.5" fill="#e4e6e9" opacity="0.4"/>
        <circle cx="775" cy="485" r="2.5" fill="#e3e5e8" opacity="0.4"/>
        <circle cx="1025" cy="555" r="2.5" fill="#e6e8eb" opacity="0.4"/>
        <circle cx="325" cy="625" r="2.5" fill="#e4e6e9" opacity="0.4"/>
        <circle cx="575" cy="695" r="2.5" fill="#e3e5e8" opacity="0.4"/>
        <circle cx="825" cy="765" r="2.5" fill="#e6e8eb" opacity="0.4"/>
        <circle cx="1075" cy="835" r="2.5" fill="#e4e6e9" opacity="0.4"/>
      </svg>
    </div>
  );
};


const CurvedSculpturalFlow = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1400 900"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Ultra-refined gradients */}
          <linearGradient id="curved-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="15%" stopColor="#fcfcfd" stopOpacity="0.92" />
            <stop offset="35%" stopColor="#f8f9fa" stopOpacity="0.88" />
            <stop offset="60%" stopColor="#f3f4f6" stopOpacity="0.82" />
            <stop offset="85%" stopColor="#e9ecef" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#dee2e6" stopOpacity="0.65" />
          </linearGradient>
          
          <linearGradient id="curved-gradient-2" x1="100%" y1="20%" x2="0%" y2="80%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="20%" stopColor="#fafbfc" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#f6f7f8" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#f1f3f4" stopOpacity="0.78" />
            <stop offset="100%" stopColor="#e8eaed" stopOpacity="0.68" />
          </linearGradient>

          <linearGradient id="curved-gradient-3" x1="20%" y1="100%" x2="80%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
            <stop offset="25%" stopColor="#f9fafb" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#f3f4f6" stopOpacity="0.78" />
            <stop offset="80%" stopColor="#e9ecef" stopOpacity="0.68" />
            <stop offset="100%" stopColor="#dee2e6" stopOpacity="0.55" />
          </linearGradient>

          <radialGradient id="accent-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#f8f9fa" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#e9ecef" stopOpacity="0.3" />
          </radialGradient>

          {/* Enhanced shadow with multiple layers */}
          <filter id="curved-shadow-premium" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur1"/>
            <feOffset in="blur1" dx="1" dy="3" result="offset1"/>
            <feFlood floodColor="#000000" floodOpacity="0.06"/>
            <feComposite in2="offset1" operator="in" result="shadow1"/>
            
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur2"/>
            <feOffset in="blur2" dx="2" dy="8" result="offset2"/>
            <feFlood floodColor="#000000" floodOpacity="0.04"/>
            <feComposite in2="offset2" operator="in" result="shadow2"/>
            
            <feGaussianBlur in="SourceAlpha" stdDeviation="12" result="blur3"/>
            <feOffset in="blur3" dx="0" dy="12" result="offset3"/>
            <feFlood floodColor="#000000" floodOpacity="0.02"/>
            <feComposite in2="offset3" operator="in" result="shadow3"/>
            
            <feMerge>
              <feMergeNode in="shadow3"/>
              <feMergeNode in="shadow2"/>
              <feMergeNode in="shadow1"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Master flowing form 1 - Ultra smooth curves */}
        <path
          d="M-50,150 Q100,80 280,120 Q460,160 640,110 Q820,60 1000,100 Q1180,140 1350,90 Q1450,80 1450,90 L1450,380 Q1300,420 1120,400 Q940,380 760,420 Q580,460 400,440 Q220,420 40,460 Q-50,480 -50,470 Z"
          fill="url(#curved-gradient-1)"
          filter="url(#curved-shadow-premium)"
        />

        {/* Master flowing form 2 - Perfect balance */}
        <path
          d="M-50,280 Q150,220 330,260 Q510,300 690,250 Q870,200 1050,240 Q1230,280 1400,230 Q1450,220 1450,230 L1450,550 Q1320,590 1140,570 Q960,550 780,590 Q600,630 420,610 Q240,590 60,630 Q-50,650 -50,640 Z"
          fill="url(#curved-gradient-2)"
          filter="url(#curved-shadow-premium)"
        />

        {/* Master flowing form 3 - Deep foundation */}
        <path
          d="M-50,450 Q200,390 380,430 Q560,470 740,420 Q920,370 1100,410 Q1280,450 1450,400 L1450,720 Q1250,760 1070,740 Q890,720 710,760 Q530,800 350,780 Q170,760 -10,800 Q-50,810 -50,800 Z"
          fill="url(#curved-gradient-3)"
          filter="url(#curved-shadow-premium)"
        />

        {/* Organic floating elements */}
        <ellipse 
          cx="280" cy="180" rx="55" ry="42" 
          fill="url(#accent-glow)" 
          opacity="0.85" 
          filter="url(#curved-shadow-premium)"
        />

        <ellipse 
          cx="920" cy="260" rx="48" ry="65" 
          fill="url(#accent-glow)" 
          opacity="0.75" 
          filter="url(#curved-shadow-premium)"
        />

        <ellipse 
          cx="1180" cy="220" rx="52" ry="38" 
          fill="url(#accent-glow)" 
          opacity="0.8" 
          filter="url(#curved-shadow-premium)"
        />

        {/* Static flowing accent lines */}
        <path 
          d="M80,320 Q280,300 480,340 Q680,380 880,360 Q1080,340 1280,380" 
          stroke="url(#curved-gradient-1)" 
          strokeWidth="3" 
          fill="none" 
          opacity="0.6"
          strokeDasharray="20,40"
        />

        <path 
          d="M120,460 Q320,440 520,480 Q720,520 920,500 Q1120,480 1320,520" 
          stroke="url(#curved-gradient-2)" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.5"
          strokeDasharray="15,30"
        />
      </svg>
    </div>
  );
};

const SharpSculpturalFlow = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1400 900"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Precision gradients */}
          <linearGradient id="sharp-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="12%" stopColor="#fefefe" stopOpacity="0.95" />
            <stop offset="28%" stopColor="#fafbfc" stopOpacity="0.92" />
            <stop offset="45%" stopColor="#f6f7f8" stopOpacity="0.88" />
            <stop offset="62%" stopColor="#f1f3f4" stopOpacity="0.83" />
            <stop offset="78%" stopColor="#eceff1" stopOpacity="0.77" />
            <stop offset="92%" stopColor="#e8eaed" stopOpacity="0.70" />
            <stop offset="100%" stopColor="#e3e5e8" stopOpacity="0.65" />
          </linearGradient>
          
          <linearGradient id="sharp-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.96" />
            <stop offset="18%" stopColor="#fcfcfd" stopOpacity="0.92" />
            <stop offset="35%" stopColor="#f8f9fa" stopOpacity="0.88" />
            <stop offset="55%" stopColor="#f3f4f6" stopOpacity="0.82" />
            <stop offset="75%" stopColor="#eef0f2" stopOpacity="0.76" />
            <stop offset="100%" stopColor="#e6e8eb" stopOpacity="0.68" />
          </linearGradient>

          <linearGradient id="sharp-gradient-3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.94" />
            <stop offset="22%" stopColor="#fafbfc" stopOpacity="0.88" />
            <stop offset="45%" stopColor="#f5f6f7" stopOpacity="0.82" />
            <stop offset="68%" stopColor="#f0f1f3" stopOpacity="0.75" />
            <stop offset="88%" stopColor="#eaecef" stopOpacity="0.68" />
            <stop offset="100%" stopColor="#e4e6e9" stopOpacity="0.58" />
          </linearGradient>

          <linearGradient id="metallic-accent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#f8f9fa" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#e9ecef" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#dee2e6" stopOpacity="0.65" />
          </linearGradient>

          {/* Ultra-precision shadow system */}
          <filter id="architectural-shadow" x="-150%" y="-150%" width="400%" height="400%">
            <feDropShadow dx="0.5" dy="1" stdDeviation="0.5" floodOpacity="0.08" floodColor="#000000"/>
            <feDropShadow dx="1" dy="3" stdDeviation="2" floodOpacity="0.06" floodColor="#000000"/>
            <feDropShadow dx="2" dy="8" stdDeviation="8" floodOpacity="0.04" floodColor="#000000"/>
            <feDropShadow dx="0" dy="16" stdDeviation="20" floodOpacity="0.02" floodColor="#000000"/>
          </filter>
        </defs>

        {/* Master crystalline form 1 - Perfect angles */}
        <path
          d="M-50,140 L160,90 L280,115 L420,85 L560,110 L720,75 L880,100 L1040,70 L1200,95 L1360,65 L1450,85 L1450,330 L1280,365 L1120,340 L960,370 L800,345 L640,375 L480,350 L320,380 L160,355 L0,385 L-50,365 Z"
          fill="url(#sharp-gradient-1)"
          filter="url(#architectural-shadow)"
        />

        {/* Master crystalline form 2 - Mathematical precision */}
        <path
          d="M-50,270 L180,240 L320,265 L460,235 L600,260 L740,230 L880,255 L1020,225 L1160,250 L1300,220 L1450,240 L1450,490 L1320,525 L1180,500 L1040,530 L900,505 L760,535 L620,510 L480,540 L340,515 L200,545 L60,520 L-50,550 Z"
          fill="url(#sharp-gradient-2)"
          filter="url(#architectural-shadow)"
        />

        {/* Master crystalline form 3 - Foundation perfection */}
        <path
          d="M-50,450 L200,420 L350,445 L500,415 L650,440 L800,410 L950,435 L1100,405 L1250,430 L1400,400 L1450,420 L1450,670 L1300,705 L1150,680 L1000,710 L850,685 L700,715 L550,690 L400,720 L250,695 L100,725 L-50,700 Z"
          fill="url(#sharp-gradient-3)"
          filter="url(#architectural-shadow)"
        />

        {/* Perfect geometric accent crystals */}
        <polygon 
          points="220,130 290,105 340,140 320,180 280,205 230,180 200,145" 
          fill="url(#metallic-accent)" 
          opacity="0.9" 
          filter="url(#architectural-shadow)"
        />

        <polygon 
          points="840,200 910,175 960,210 940,250 880,275 820,250 800,215" 
          fill="url(#metallic-accent)" 
          opacity="0.85" 
          filter="url(#architectural-shadow)"
        />

        <polygon 
          points="1120,160 1190,135 1240,170 1220,210 1160,235 1100,210 1080,175" 
          fill="url(#metallic-accent)" 
          opacity="0.95" 
          filter="url(#architectural-shadow)"
        />

        {/* Static precision accent lines */}
        <path 
          d="M100,340 L260,320 L420,360 L580,340 L740,380 L900,360 L1060,400 L1220,380" 
          stroke="url(#sharp-gradient-1)" 
          strokeWidth="2.5" 
          fill="none" 
          opacity="0.7"
          strokeDasharray="25,15"
        />

        <path 
          d="M160,480 L320,460 L480,500 L640,480 L800,520 L960,500 L1120,540 L1280,520" 
          stroke="url(#sharp-gradient-2)" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.6"
          strokeDasharray="20,10"
        />

        {/* Ultra-fine detail lines */}
        <path 
          d="M0,200 L1400,240" 
          stroke="#ffffff" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.3"
          strokeDasharray="30,20"
        />
      </svg>
    </div>
  );
};

const SculpturalFlowShowcase = () => {
  const [activePattern, setActivePattern] = useState('curved');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-150 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent"></div>
      
      {/* Pattern Display - Lightning fast rendering */}
      <div className="relative h-screen overflow-hidden">
        {activePattern === 'curved' ? (
          <CurvedSculpturalFlow />
        ) : (
          <SharpSculpturalFlow />
        )}
        
        {/* Premium content overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl max-w-2xl mx-8 transform transition-all duration-300 hover:scale-105">
            <div className="mb-6">
              <h1 className="text-6xl font-extralight text-gray-800 mb-2 tracking-wide">
                {activePattern === 'curved' ? 'Organic' : 'Crystalline'}
              </h1>
              <h2 className="text-2xl font-light text-gray-600 tracking-wider">
                {activePattern === 'curved' ? 'Sculptural Flow' : 'Architectural Precision'}
              </h2>
            </div>
            
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed text-lg font-light">
              {activePattern === 'curved' 
                ? 'Flowing forms inspired by natural sculptural beauty, with organic curves that create perfect harmony.'
                : 'Geometric patterns crafted with mathematical precision, creating crystalline structures of architectural excellence.'
              }
            </p>
            
            <div className="flex gap-6 justify-center">
              <button
                onClick={() => setActivePattern('curved')}
                className={`group px-8 py-3 rounded-full transition-all duration-300 font-medium tracking-wide ${
                  activePattern === 'curved'
                    ? 'bg-white/90 text-gray-800 shadow-xl scale-105'
                    : 'bg-white/10 text-gray-700 hover:bg-white/20 hover:scale-105'
                }`}
              >
                <span className="relative">
                  Organic Flow
                  {activePattern === 'curved' && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-600 rounded-full"></div>
                  )}
                </span>
              </button>
              
              <button
                onClick={() => setActivePattern('sharp')}
                className={`group px-8 py-3 rounded-full transition-all duration-300 font-medium tracking-wide ${
                  activePattern === 'sharp'
                    ? 'bg-white/90 text-gray-800 shadow-xl scale-105'
                    : 'bg-white/10 text-gray-700 hover:bg-white/20 hover:scale-105'
                }`}
              >
                <span className="relative">
                  Crystal Structure
                  {activePattern === 'sharp' && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-600 rounded-full"></div>
                  )}
                </span>
              </button>
            </div>
            
            {/* Performance indicators */}
            <div className="mt-8 flex justify-center gap-8 text-sm text-gray-500 font-light">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                <span>Zero Lag</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                <span>Instant Rendering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20 rounded-tl-lg"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/20 rounded-tr-lg"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/20 rounded-bl-lg"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20 rounded-br-lg"></div>
    </div>
  );
};

const StonePileSculpturalFlow = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1400 900"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Stone-inspired gradients with natural earth tones */}
          <linearGradient id="stone-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="10%" stopColor="#fefefe" stopOpacity="0.95" />
            <stop offset="22%" stopColor="#fafbfc" stopOpacity="0.92" />
            <stop offset="36%" stopColor="#f5f6f7" stopOpacity="0.88" />
            <stop offset="52%" stopColor="#eff1f2" stopOpacity="0.84" />
            <stop offset="68%" stopColor="#e8eaec" stopOpacity="0.79" />
            <stop offset="84%" stopColor="#e0e3e6" stopOpacity="0.73" />
            <stop offset="100%" stopColor="#d7dbdf" stopOpacity="0.67" />
          </linearGradient>
          
          <linearGradient id="stone-gradient-2" x1="100%" y1="20%" x2="0%" y2="80%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.96" />
            <stop offset="15%" stopColor="#fcfdfd" stopOpacity="0.93" />
            <stop offset="32%" stopColor="#f7f8f9" stopOpacity="0.89" />
            <stop offset="50%" stopColor="#f1f2f4" stopOpacity="0.84" />
            <stop offset="68%" stopColor="#eaecef" stopOpacity="0.78" />
            <stop offset="85%" stopColor="#e2e5e8" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#d9dde1" stopOpacity="0.65" />
          </linearGradient>

          <linearGradient id="stone-gradient-3" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="18%" stopColor="#fbfcfc" stopOpacity="0.91" />
            <stop offset="38%" stopColor="#f6f7f8" stopOpacity="0.86" />
            <stop offset="58%" stopColor="#eff1f3" stopOpacity="0.80" />
            <stop offset="78%" stopColor="#e7eaed" stopOpacity="0.73" />
            <stop offset="100%" stopColor="#dee2e6" stopOpacity="0.66" />
          </linearGradient>

          <linearGradient id="stone-gradient-4" x1="40%" y1="30%" x2="60%" y2="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.94" />
            <stop offset="20%" stopColor="#f9fafb" stopOpacity="0.89" />
            <stop offset="45%" stopColor="#f3f4f6" stopOpacity="0.83" />
            <stop offset="70%" stopColor="#ebeef1" stopOpacity="0.76" />
            <stop offset="100%" stopColor="#e1e5e9" stopOpacity="0.68" />
          </linearGradient>

          {/* Radial gradients for stone texture depth */}
          <radialGradient id="stone-texture-1" cx="35%" cy="40%" r="75%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.96" />
            <stop offset="25%" stopColor="#f8f9fa" stopOpacity="0.88" />
            <stop offset="55%" stopColor="#eef1f4" stopOpacity="0.78" />
            <stop offset="80%" stopColor="#e4e7eb" stopOpacity="0.66" />
            <stop offset="100%" stopColor="#d8dce1" stopOpacity="0.54" />
          </radialGradient>

          <radialGradient id="stone-texture-2" cx="65%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.94" />
            <stop offset="30%" stopColor="#f6f7f9" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#eceff2" stopOpacity="0.74" />
            <stop offset="90%" stopColor="#e0e4e8" stopOpacity="0.62" />
            <stop offset="100%" stopColor="#d6dbe0" stopOpacity="0.50" />
          </radialGradient>

          {/* Stone-specific shadow system for natural depth */}
          <filter id="stone-shadow" x="-150%" y="-150%" width="400%" height="400%">
            <feDropShadow dx="0.5" dy="1.5" stdDeviation="0.8" floodOpacity="0.12" floodColor="#000000"/>
            <feDropShadow dx="1.2" dy="3" stdDeviation="2.5" floodOpacity="0.09" floodColor="#000000"/>
            <feDropShadow dx="2.5" dy="7" stdDeviation="6" floodOpacity="0.07" floodColor="#000000"/>
            <feDropShadow dx="4" dy="15" stdDeviation="15" floodOpacity="0.05" floodColor="#000000"/>
            <feDropShadow dx="0" dy="25" stdDeviation="30" floodOpacity="0.03" floodColor="#000000"/>
          </filter>

          {/* Natural stone texture filter */}
          <filter id="stone-texture" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur"/>
            <feOffset in="blur" dx="0" dy="0" result="offset"/>
            <feFlood floodColor="#ffffff" floodOpacity="0.15"/>
            <feComposite in2="offset" operator="in" result="glow"/>
            <feMerge>
              <feMergeNode in="glow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Foundation stones - Large base stones */}
        <ellipse cx="200" cy="750" rx="120" ry="80" fill="url(#stone-gradient-1)" filter="url(#stone-shadow)" transform="rotate(-5 200 750)"/>
        <ellipse cx="400" cy="780" rx="140" ry="90" fill="url(#stone-gradient-2)" filter="url(#stone-shadow)" transform="rotate(8 400 780)"/>
        <ellipse cx="650" cy="770" rx="160" ry="85" fill="url(#stone-gradient-3)" filter="url(#stone-shadow)" transform="rotate(-3 650 770)"/>
        <ellipse cx="900" cy="785" rx="130" ry="95" fill="url(#stone-gradient-4)" filter="url(#stone-shadow)" transform="rotate(12 900 785)"/>
        <ellipse cx="1150" cy="760" rx="145" ry="88" fill="url(#stone-gradient-1)" filter="url(#stone-shadow)" transform="rotate(-7 1150 760)"/>

        {/* Second layer - Medium stones */}
        <ellipse cx="150" cy="650" rx="100" ry="65" fill="url(#stone-gradient-3)" filter="url(#stone-shadow)" transform="rotate(15 150 650)"/>
        <ellipse cx="320" cy="670" rx="110" ry="70" fill="url(#stone-gradient-4)" filter="url(#stone-shadow)" transform="rotate(-12 320 670)"/>
        <ellipse cx="500" cy="680" rx="125" ry="75" fill="url(#stone-gradient-1)" filter="url(#stone-shadow)" transform="rotate(6 500 680)"/>
        <ellipse cx="720" cy="665" rx="115" ry="68" fill="url(#stone-gradient-2)" filter="url(#stone-shadow)" transform="rotate(-18 720 665)"/>
        <ellipse cx="950" cy="675" rx="105" ry="72" fill="url(#stone-gradient-3)" filter="url(#stone-shadow)" transform="rotate(10 950 675)"/>
        <ellipse cx="1200" cy="660" rx="120" ry="65" fill="url(#stone-gradient-4)" filter="url(#stone-shadow)" transform="rotate(-8 1200 660)"/>

        {/* Third layer - Smaller stones with more variety */}
        <ellipse cx="100" cy="550" rx="85" ry="55" fill="url(#stone-texture-1)" filter="url(#stone-shadow)" transform="rotate(22 100 550)"/>
        <ellipse cx="250" cy="570" rx="90" ry="50" fill="url(#stone-gradient-2)" filter="url(#stone-shadow)" transform="rotate(-15 250 570)"/>
        <ellipse cx="420" cy="560" rx="95" ry="60" fill="url(#stone-texture-2)" filter="url(#stone-shadow)" transform="rotate(8 420 560)"/>
        <ellipse cx="580" cy="575" rx="88" ry="52" fill="url(#stone-gradient-4)" filter="url(#stone-shadow)" transform="rotate(-25 580 575)"/>
        <ellipse cx="750" cy="565" rx="92" ry="58" fill="url(#stone-gradient-1)" filter="url(#stone-shadow)" transform="rotate(18 750 565)"/>
        <ellipse cx="920" cy="555" rx="87" ry="54" fill="url(#stone-texture-1)" filter="url(#stone-shadow)" transform="rotate(-10 920 555)"/>
        <ellipse cx="1080" cy="570" rx="90" ry="56" fill="url(#stone-gradient-3)" filter="url(#stone-shadow)" transform="rotate(12 1080 570)"/>
        <ellipse cx="1250" cy="560" rx="85" ry="58" fill="url(#stone-gradient-2)" filter="url(#stone-shadow)" transform="rotate(-20 1250 560)"/>

        {/* Fourth layer - Small to medium stones */}
        <ellipse cx="80" cy="450" rx="70" ry="45" fill="url(#stone-gradient-3)" filter="url(#stone-shadow)" transform="rotate(30 80 450)"/>
        <ellipse cx="200" cy="470" rx="75" ry="48" fill="url(#stone-texture-2)" filter="url(#stone-shadow)" transform="rotate(-18 200 470)"/>
        <ellipse cx="340" cy="460" rx="72" ry="42" fill="url(#stone-gradient-1)" filter="url(#stone-shadow)" transform="rotate(14 340 460)"/>
        <ellipse cx="480" cy="475" rx="78" ry="50" fill="url(#stone-gradient-4)" filter="url(#stone-shadow)" transform="rotate(-22 480 475)"/>
        <ellipse cx="620" cy="465" rx="74" ry="46" fill="url(#stone-texture-1)" filter="url(#stone-shadow)" transform="rotate(16 620 465)"/>
        <ellipse cx="760" cy="455" rx="76" ry="44" fill="url(#stone-gradient-2)" filter="url(#stone-shadow)" transform="rotate(-28 760 455)"/>
        <ellipse cx="900" cy="470" rx="70" ry="48" fill="url(#stone-gradient-3)" filter="url(#stone-shadow)" transform="rotate(20 900 470)"/>
        <ellipse cx="1040" cy="460" rx="73" ry="45" fill="url(#stone-texture-2)" filter="url(#stone-shadow)" transform="rotate(-12 1040 460)"/>
        <ellipse cx="1180" cy="450" rx="77" ry="47" fill="url(#stone-gradient-4)" filter="url(#stone-shadow)" transform="rotate(24 1180 450)"/>
        <ellipse cx="1320" cy="465" rx="71" ry="43" fill="url(#stone-gradient-1)" filter="url(#stone-shadow)" transform="rotate(-16 1320 465)"/>

        {/* Fifth layer - Small stones creating natural gaps */}
        <ellipse cx="120" cy="360" rx="60" ry="38" fill="url(#stone-texture-1)" filter="url(#stone-shadow)" transform="rotate(35 120 360)"/>
        <ellipse cx="260" cy="375" rx="58" ry="40" fill="url(#stone-gradient-2)" filter="url(#stone-shadow)" transform="rotate(-25 260 375)"/>
        <ellipse cx="400" cy="365" rx="62" ry="36" fill="url(#stone-gradient-3)" filter="url(#stone-shadow)" transform="rotate(18 400 365)"/>
        <ellipse cx="540" cy="380" rx="56" ry="42" fill="url(#stone-texture-2)" filter="url(#stone-shadow)" transform="rotate(-30 540 380)"/>
        <ellipse cx="680" cy="370" rx="60" ry="38" fill="url(#stone-gradient-4)" filter="url(#stone-shadow)" transform="rotate(22 680 370)"/>
        <ellipse cx="820" cy="360" rx="58" ry="40" fill="url(#stone-gradient-1)" filter="url(#stone-shadow)" transform="rotate(-14 820 360)"/>
        <ellipse cx="960" cy="375" rx="61" ry="37" fill="url(#stone-texture-1)" filter="url(#stone-shadow)" transform="rotate(26 960 375)"/>
        <ellipse cx="1100" cy="365" rx="57" ry="41" fill="url(#stone-gradient-2)" filter="url(#stone-shadow)" transform="rotate(-20 1100 365)"/>
        <ellipse cx="1240" cy="355" rx="59" ry="39" fill="url(#stone-gradient-3)" filter="url(#stone-shadow)" transform="rotate(28 1240 355)"/>

        {/* Upper layers - Smaller stones with increasing randomness */}
        <ellipse cx="180" cy="270" rx="48" ry="32" fill="url(#stone-gradient-4)" filter="url(#stone-shadow)" transform="rotate(40 180 270)"/>
        <ellipse cx="320" cy="285" rx="52" ry="30" fill="url(#stone-texture-2)" filter="url(#stone-shadow)" transform="rotate(-32 320 285)"/>
        <ellipse cx="460" cy="275" rx="45" ry="34" fill="url(#stone-gradient-1)" filter="url(#stone-shadow)" transform="rotate(24 460 275)"/>
        <ellipse cx="600" cy="290" rx="50" ry="28" fill="url(#stone-texture-1)" filter="url(#stone-shadow)" transform="rotate(-38 600 290)"/>
        <ellipse cx="740" cy="280" rx="47" ry="32" fill="url(#stone-gradient-2)" filter="url(#stone-shadow)" transform="rotate(32 740 280)"/>
        <ellipse cx="880" cy="270" rx="49" ry="30" fill="url(#stone-gradient-3)" filter="url(#stone-shadow)" transform="rotate(-26 880 270)"/>
        <ellipse cx="1020" cy="285" rx="46" ry="33" fill="url(#stone-texture-2)" filter="url(#stone-shadow)" transform="rotate(36 1020 285)"/>
        <ellipse cx="1160" cy="275" rx="51" ry="29" fill="url(#stone-gradient-4)" filter="url(#stone-shadow)" transform="rotate(-18 1160 275)"/>

        {/* Top layers - Small accent stones */}
        <ellipse cx="240" cy="190" rx="38" ry="25" fill="url(#stone-texture-1)" filter="url(#stone-shadow)" transform="rotate(45 240 190)"/>
        <ellipse cx="380" cy="205" rx="42" ry="27" fill="url(#stone-gradient-3)" filter="url(#stone-shadow)" transform="rotate(-40 380 205)"/>
        <ellipse cx="520" cy="195" rx="35" ry="26" fill="url(#stone-gradient-1)" filter="url(#stone-shadow)" transform="rotate(30 520 195)"/>
        <ellipse cx="660" cy="210" rx="40" ry="24" fill="url(#stone-texture-2)" filter="url(#stone-shadow)" transform="rotate(-35 660 210)"/>
        <ellipse cx="800" cy="200" rx="37" ry="28" fill="url(#stone-gradient-2)" filter="url(#stone-shadow)" transform="rotate(38 800 200)"/>
        <ellipse cx="940" cy="190" rx="41" ry="25" fill="url(#stone-gradient-4)" filter="url(#stone-shadow)" transform="rotate(-28 940 190)"/>
        <ellipse cx="1080" cy="205" rx="36" ry="27" fill="url(#stone-texture-1)" filter="url(#stone-shadow)" transform="rotate(42 1080 205)"/>

        {/* Peak stones - Smallest stones at the top */}
        <ellipse cx="300" cy="120" rx="30" ry="20" fill="url(#stone-gradient-2)" filter="url(#stone-shadow)" transform="rotate(50 300 120)"/>
        <ellipse cx="440" cy="135" rx="32" ry="18" fill="url(#stone-texture-2)" filter="url(#stone-shadow)" transform="rotate(-45 440 135)"/>
        <ellipse cx="580" cy="125" rx="28" ry="22" fill="url(#stone-gradient-4)" filter="url(#stone-shadow)" transform="rotate(35 580 125)"/>
        <ellipse cx="720" cy="140" rx="31" ry="19" fill="url(#stone-gradient-1)" filter="url(#stone-shadow)" transform="rotate(-42 720 140)"/>
        <ellipse cx="860" cy="130" rx="29" ry="21" fill="url(#stone-texture-1)" filter="url(#stone-shadow)" transform="rotate(48 860 130)"/>
        <ellipse cx="1000" cy="120" rx="33" ry="20" fill="url(#stone-gradient-3)" filter="url(#stone-shadow)" transform="rotate(-38 1000 120)"/>

        {/* Scattered individual stones for natural look */}
        <ellipse cx="50" cy="320" rx="25" ry="18" fill="url(#stone-gradient-1)" filter="url(#stone-shadow)" transform="rotate(60 50 320)"/>
        <ellipse cx="1350" cy="380" rx="28" ry="20" fill="url(#stone-texture-2)" filter="url(#stone-shadow)" transform="rotate(-55 1350 380)"/>
        <ellipse cx="30" cy="600" rx="35" ry="25" fill="url(#stone-gradient-3)" filter="url(#stone-shadow)" transform="rotate(25 30 600)"/>
        <ellipse cx="1370" cy="620" rx="32" ry="22" fill="url(#stone-gradient-4)" filter="url(#stone-shadow)" transform="rotate(-30 1370 620)"/>

        {/* Natural debris and small pebbles */}
        <circle cx="150" cy="800" r="8" fill="url(#stone-gradient-2)" opacity="0.7"/>
        <circle cx="280" cy="810" r="6" fill="url(#stone-gradient-4)" opacity="0.6"/>
        <circle cx="450" cy="820" r="7" fill="url(#stone-gradient-1)" opacity="0.7"/>
        <circle cx="680" cy="815" r="5" fill="url(#stone-gradient-3)" opacity="0.6"/>
        <circle cx="850" cy="825" r="9" fill="url(#stone-texture-1)" opacity="0.7"/>
        <circle cx="1050" cy="805" r="6" fill="url(#stone-gradient-2)" opacity="0.6"/>
        <circle cx="1280" cy="820" r="8" fill="url(#stone-gradient-4)" opacity="0.7"/>

        {/* Subtle connecting lines suggesting natural settling */}
        <path d="M200,730 Q400,720 650,730 Q900,740 1150,730" stroke="url(#stone-gradient-1)" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="20,30"/>
        <path d="M150,630 Q500,650 720,640 Q950,630 1200,640" stroke="url(#stone-gradient-2)" strokeWidth="1" fill="none" opacity="0.25" strokeDasharray="15,25"/>
        <path d="M100,530 Q420,540 580,550 Q920,535 1080,545" stroke="url(#stone-gradient-3)" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="25,35"/>
      </svg>
    </div>
  );
};

export { SharpSculpturalFlow, CurvedSculpturalFlow, JigsawSculpturalFlow, SculpturalFlowShowcase, StonePileSculpturalFlow };