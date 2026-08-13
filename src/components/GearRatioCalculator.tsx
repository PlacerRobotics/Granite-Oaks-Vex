"use client";

import { useMemo, useState } from "react";

const MOTOR_RPM_OPTIONS = [
  { label: "V5 Smart Motor — Blue cartridge (600 RPM)", rpm: 600 },
  { label: "V5 Smart Motor — Green cartridge (200 RPM)", rpm: 200 },
  { label: "V5 Smart Motor — Red cartridge (100 RPM)", rpm: 100 },
  { label: "VEX IQ Smart Motor (127 RPM)", rpm: 127 },
];

export default function GearRatioCalculator() {
  const [motorRpm, setMotorRpm] = useState(600);
  const [inputTeeth, setInputTeeth] = useState(12);
  const [outputTeeth, setOutputTeeth] = useState(36);
  const [wheelDiameter, setWheelDiameter] = useState(4);

  const { outputRpm, torqueMultiplier, surfaceSpeedInPerSec, surfaceSpeedFtPerSec } =
    useMemo(() => {
      const safeInput = inputTeeth > 0 ? inputTeeth : 1;
      const safeOutput = outputTeeth > 0 ? outputTeeth : 1;
      const ratio = safeInput / safeOutput;
      const outRpm = motorRpm * ratio;
      const torqueMult = safeOutput / safeInput;
      const wheelCircumference = Math.PI * wheelDiameter;
      const inPerSec = (outRpm * wheelCircumference) / 60;
      const ftPerSec = inPerSec / 12;
      return {
        outputRpm: outRpm,
        torqueMultiplier: torqueMult,
        surfaceSpeedInPerSec: inPerSec,
        surfaceSpeedFtPerSec: ftPerSec,
      };
    }, [motorRpm, inputTeeth, outputTeeth, wheelDiameter]);

  const isGearingUp = outputTeeth < inputTeeth;

  return (
    <div className="rounded-xl border border-black/10 p-6 dark:border-white/10">
      <h2 className="text-lg font-bold">Gear Ratio & Wheel Speed Calculator</h2>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        &quot;Input&quot; is the gear attached to the motor; &quot;output&quot; is the gear
        attached to the wheel or mechanism. More output teeth relative to input teeth means more torque,
        less speed.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm font-medium">
          Motor
          <select
            className="rounded-md border border-black/15 bg-transparent px-3 py-2 text-sm dark:border-white/20"
            value={motorRpm}
            onChange={(e) => setMotorRpm(Number(e.target.value))}
          >
            {MOTOR_RPM_OPTIONS.map((o) => (
              <option key={o.label} value={o.rpm} className="text-black">
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium">
          Wheel diameter (in)
          <input
            type="number"
            min={0.5}
            step={0.25}
            className="rounded-md border border-black/15 bg-transparent px-3 py-2 text-sm dark:border-white/20"
            value={wheelDiameter}
            onChange={(e) => setWheelDiameter(Number(e.target.value))}
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium">
          Input gear teeth (on motor)
          <input
            type="number"
            min={1}
            className="rounded-md border border-black/15 bg-transparent px-3 py-2 text-sm dark:border-white/20"
            value={inputTeeth}
            onChange={(e) => setInputTeeth(Number(e.target.value))}
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium">
          Output gear teeth (on wheel/mechanism)
          <input
            type="number"
            min={1}
            className="rounded-md border border-black/15 bg-transparent px-3 py-2 text-sm dark:border-white/20"
            value={outputTeeth}
            onChange={(e) => setOutputTeeth(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-neutral-50 p-4 dark:bg-white/5">
          <p className="text-xs uppercase tracking-wide text-neutral-500">Ratio</p>
          <p className="mt-1 text-2xl font-bold">
            {inputTeeth}:{outputTeeth}{" "}
            <span className="text-sm font-normal text-neutral-500">
              ({isGearingUp ? "geared up — faster, less torque" : "geared down — more torque, slower"})
            </span>
          </p>
        </div>
        <div className="rounded-lg bg-neutral-50 p-4 dark:bg-white/5">
          <p className="text-xs uppercase tracking-wide text-neutral-500">Output speed</p>
          <p className="mt-1 text-2xl font-bold">{outputRpm.toFixed(1)} RPM</p>
        </div>
        <div className="rounded-lg bg-neutral-50 p-4 dark:bg-white/5">
          <p className="text-xs uppercase tracking-wide text-neutral-500">Torque multiplier</p>
          <p className="mt-1 text-2xl font-bold">{torqueMultiplier.toFixed(2)}x</p>
        </div>
        <div className="rounded-lg bg-neutral-50 p-4 dark:bg-white/5">
          <p className="text-xs uppercase tracking-wide text-neutral-500">Wheel surface speed</p>
          <p className="mt-1 text-2xl font-bold">
            {surfaceSpeedFtPerSec.toFixed(2)} ft/s{" "}
            <span className="text-sm font-normal text-neutral-500">
              ({surfaceSpeedInPerSec.toFixed(1)} in/s)
            </span>
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs text-neutral-500">
        Estimate only — ignores efficiency losses, slippage, and load. Useful for
        comparing gearing options, not for precision tuning.
      </p>
    </div>
  );
}
