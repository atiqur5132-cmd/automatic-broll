---
name: remotion-sound-design-mastery
description: Audio mixing, automated ducking, and frame-accurate sound effect (SFX) staging for Remotion videos. Use when adding ambient soundbeds, transition whooshes, risers, sub-bass impacts, or voiceover synchronization.
metadata:
  tags: remotion, audio, sound-design, sfx, mixing, ducking
---

# Remotion Sound Design Mastery

Sound design is 50% of the perceived quality of any professional video. Use this skill to layer and balance audio systematically in Remotion.

## 1. Professional 3-Tier Audio Hierarchy

Always balance your mix according to broadcast standards:
- **Primary Layer (Voiceover / Dialogue)**: `volume={1.0}` (0 dB reference)
- **Secondary Layer (Foley / UI Clicks / Transitions / SFX)**: `volume={0.35}` to `0.5` (-6 dB to -10 dB)
- **Background Layer (Ambient Bed / Music)**: `volume={0.12}` to `0.18` (-16 dB to -20 dB during speech)

---

## 2. Automated Audio Ducking (Music Dipping Around Voiceover)

When background music plays underneath voiceover, lower ("duck") the music volume when speech occurs and smoothly raise it back up during pauses.

```tsx
import { Audio } from "@remotion/media";
import { useCurrentFrame, interpolate } from "remotion";
import React from "react";

export const DuckedBackgroundMusic: React.FC<{
  src: string;
  speechIntervals: Array<{ start: number; end: number }>;
  baseVolume?: number;
  duckedVolume?: number;
}> = ({ src, speechIntervals, baseVolume = 0.25, duckedVolume = 0.08 }) => {
  const frame = useCurrentFrame();

  // Calculate volume dynamically based on proximity to speech intervals
  let currentVolume = baseVolume;
  const fadeFrames = 12; // ~0.4s fade at 30fps

  for (const interval of speechIntervals) {
    // Fade out just before speech begins
    if (frame >= interval.start - fadeFrames && frame < interval.start) {
      currentVolume = interpolate(
        frame,
        [interval.start - fadeFrames, interval.start],
        [baseVolume, duckedVolume],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
      );
      break;
    }
    // Hold ducked volume during speech
    if (frame >= interval.start && frame <= interval.end) {
      currentVolume = duckedVolume;
      break;
    }
    // Fade back up after speech ends
    if (frame > interval.end && frame <= interval.end + fadeFrames) {
      currentVolume = interpolate(
        frame,
        [interval.end, interval.end + fadeFrames],
        [duckedVolume, baseVolume],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
      );
      break;
    }
  }

  return <Audio src={src} volume={currentVolume} />;
};
```

---

## 3. Frame-Accurate Transition SFX Placement

Never place transition sound effects randomly. Synchronize them with the visual cut frame:

### Transition Whoosh / Swoosh
- **Placement**: Start Whoosh SFX **4 to 6 frames BEFORE** the visual scene cut so the peak frequency hits precisely at the cut frame.
```tsx
{/* Scene transition happens at frame 90 */}
<Sequence from={85} layout="none">
  <Audio src={staticFile("sfx/whoosh.mp3")} volume={0.4} />
</Sequence>
```

### Riser + Impact Combo (Documentary Reveal)
- **Riser**: Ends exactly at reveal frame `N`.
- **Sub-Bass / Impact Hit**: Begins exactly at reveal frame `N`.
```tsx
{/* Major Title Reveal at Frame 120 */}
<Sequence from={60} durationInFrames={60} layout="none">
  <Audio src={staticFile("sfx/riser-2sec.mp3")} volume={0.3} />
</Sequence>
<Sequence from={120} layout="none">
  <Audio src={staticFile("sfx/sub-boom-impact.mp3")} volume={0.55} />
</Sequence>
```

---

## 4. Multi-Track Timeline Composition Pattern

Organize audio in a dedicated `<AudioTracks />` component inside your root composition to prevent cluttering visual components:

```tsx
export const AudioTracks: React.FC = () => {
  return (
    <>
      {/* Background Music */}
      <DuckedBackgroundMusic
        src={staticFile("music/ambient-documentary.mp3")}
        speechIntervals={[
          { start: 15, end: 140 },
          { start: 165, end: 310 },
        ]}
      />

      {/* Foley & SFX */}
      <Sequence from={15} layout="none">
        <Audio src={staticFile("sfx/ui-pop.mp3")} volume={0.3} />
      </Sequence>
      <Sequence from={145} layout="none">
        <Audio src={staticFile("sfx/whoosh.mp3")} volume={0.4} />
      </Sequence>
    </>
  );
};
```
