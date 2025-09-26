import { useMemo, useState } from "react";
import { DaimoPayButton } from "@daimo/pay";
import type { Address } from "viem";
import { daimo } from "../config";

export function Donate({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const emailValid = useEmailValid(email);
  const addressValid = useAddressValid(address);
  const phoneValid = usePhoneValid(phone);
  const isReady = useMemo(() => {
    if (!name || !emailValid) return false;
    if (address.trim() && !addressValid) return false;
    if (phone.trim() && !phoneValid) return false;
    return true;
  }, [name, emailValid, address, addressValid, phone, phoneValid]);

  return (
    <form className="donate-form" onSubmit={(e) => e.preventDefault()}>
      <LabeledInput label="Name">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </LabeledInput>
      <div className="spacer-16" />
      <LabeledInput label="Email">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

      </LabeledInput>
            <div className="spacer-16" />
            <LabeledInput label="Address">
              <input
                type="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />

      </LabeledInput>
      <div className="spacer-16" />
      <LabeledInput
        label={
          <span className="label-row">
            <span>Phone</span>
            <span className="optional">optional</span>
          </span>
        }
      >
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </LabeledInput>
      <div className="spacer-16" />
      <DaimoPayButton.Custom
        appId={daimo.appId}
        toChain={daimo.toChain}
        toToken={daimo.toToken as Address}
        toAddress={daimo.toAddress as Address}
        intent="Donate"
        redirectReturnUrl={daimo.returnUrl}
        metadata={{ name, email, address, phone }}
        onPaymentCompleted={() => onSuccess()}
      >
        {({ show }) => (
          <button type="button" onClick={show} disabled={!isReady}>
            Donate
          </button>
        )}
      </DaimoPayButton.Custom>
      <div className="spacer-16" />
      <p className="fine-print">
        Avalon Institute is a fiscally sponsored project of the Mars Review of Books Foundation, a 501(c)3 non-profit organization (EIN: 92-1553880). Donations are
        tax deductible.
      </p>
    </form>
  );
}

function LabeledInput({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label>
      {label}
      {children}
    </label>
  );
}

function useEmailValid(email: string): boolean {
  // minimal pattern: something@something.tld (no spaces)
  return useMemo(() => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email), [email]);
}

function usePhoneValid(phone: string): boolean {
  // minimal pattern: digits, spaces, dashes, parentheses, plus; at least 7 digits
  return useMemo(() => {
    const digits = (phone.match(/\d/g) || []).length;
    return /^[+()\d\s-]*$/.test(phone) && digits >= 7;
  }, [phone]);
}
