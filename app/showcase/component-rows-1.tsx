import type { Row } from "@/types/types";

import { AnalogClockWidget } from "@/components/clocks/analog-clock-widget";
import { WiFiToggleWidget } from "@/components/wifi/wifi-toggle-widget";
import { VoiceAssistantWidget } from "@/components/audio/voice-assistant-widget";
import { IosEarbudsWidget } from "@/components/audio/ios-earbuds-widget";
import { RecorderFaceWidget } from "@/components/audio/recorder-face-widget";
import { BatteryFaceWidget } from "@/components/battery/battery-face-widget";
import { CompassWidget } from "@/components/compass/compass-widget";
import { BluetoothFaceWidget } from "@/components/bluetooth/bluetooth-face-widget";
import { TorchFaceWidget } from "@/components/torch/torch-face-widget";
import { DndFaceWidget } from "@/components/activity/dnd-face-widget";
import { IosDigitalClockWidget } from "@/components/clocks/ios-digital-clock-widget";
import { IosCalenderWidget } from "@/components/calender/ios-calender-widget";
import { StopwatchWidget } from "@/components/stopwatch/stopwatch-widget";
import { IosMapLocationWidget } from "@/components/map-location/ios-map-location-widget";
import { FocusBreathWidget } from "@/components/activity/focus-breath-widget";
import { BlobProfileCard } from "@/components/profile/blob-profile";
import { DailyActivityCalendarWidget } from "@/components/calender/daily-activity-calendar-widget";
import { AudioRecorderWidget } from "@/components/audio/audio-recorder-widget";
import { FlightArrivalWidget } from "@/components/travel/flight-arrival-widget";
import { MinimalAgendaWidget } from "@/components/travel/minimal-agenda-widget";
import { RidePickupWidget } from "@/components/travel/ride-pickup-widget";
import { ElectricScooterWidget } from "@/components/travel/electric-scooter-widget";

export const showcaseRows01Devices: Row[] = [
  [
    <AnalogClockWidget key="analog-clock-roman" variant="roman" />,
    <AnalogClockWidget key="analog-clock-minimal" variant="minimal" />,
    <AnalogClockWidget key="analog-clock-numeric" variant="numeric" />,
  ],
  [
    <WiFiToggleWidget key="wifi-toggle" />,
    <VoiceAssistantWidget key="voice-assistant" />,
    <IosEarbudsWidget key="ios-earbuds" />,
  ],
  [
    <RecorderFaceWidget key="recorder-face" />,
    <BatteryFaceWidget key="battery-face" />,
    <CompassWidget key="compass" />,
  ],
  [
    <BluetoothFaceWidget key="bluetooth-face" />,
    <TorchFaceWidget key="torch-face" />,
    <DndFaceWidget key="dnd-face" />,
  ],
  [
    <IosDigitalClockWidget key="ios-digital-clock" />,
    <IosCalenderWidget key="ios-calender" />,
    <StopwatchWidget key="stopwatch" />,
  ],
  [
    <IosMapLocationWidget key="ios-map-location" />,
    <FocusBreathWidget key="focus-breath" />,
    <BlobProfileCard key="blob-profile" />,
  ],
  [
    <DailyActivityCalendarWidget key="daily-activity-calendar" />,
    <AudioRecorderWidget key="audio-recorder" />,
    <FlightArrivalWidget key="flight-arrival" />,
  ],
  [
    <MinimalAgendaWidget key="minimal-agenda" />,
    <RidePickupWidget key="ride-pickup" />,
    <ElectricScooterWidget key="electric-scooter" />,
  ],
];
