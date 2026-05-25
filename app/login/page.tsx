"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const submit = async () => {
    const res = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({ password: pw }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) { router.push("/"); router.refresh(); }
    else setError(true);
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", background: "#f2f5f8", fontFamily: "'Plus Jakarta Sans', sans-serif"
    }}>
      <div style={{
        background: "#fff", borderRadius: "24px", padding: "40px 36px",
        width: "100%", maxWidth: "360px", border: "0.5px solid #d0d8e4", textAlign: "center"
      }}>
        <div style={{ fontSize: "28px", marginBottom: "8px" }}>🔒</div>
        <h1 style={{
          fontFamily: "'Fraunces', serif", fontSize: "22px",
          fontWeight: 600, color: "#1a1a2e", marginBottom: "6px"
        }}>Private portfolio</h1>
        <p style={{ fontSize: "13px", color: "#6b7280", marginBottom: "24px" }}>
          Enter the access code to view Federico&apos;s work.
        </p>
        <input
          type="password" placeholder="Access code" value={pw}
          onChange={e => { setPw(e.target.value); setError(false); }}
          onKeyDown={e => e.key === "Enter" && submit()}
          style={{
            width: "100%", padding: "11px 16px", borderRadius: "12px",
            border: error ? "1.5px solid #ef4444" : "1px solid #d0d8e4",
            fontSize: "14px", outline: "none", marginBottom: "12px",
            fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a1a2e"
          }}
        />
        {error && <p style={{ fontSize: "12px", color: "#ef4444", marginBottom: "10px" }}>Incorrect code — try again.</p>}
        <button onClick={submit} style={{
          width: "100%", background: "#1a1a2e", color: "#f2f5f8",
          border: "none", borderRadius: "100px", padding: "12px",
          fontSize: "14px", fontWeight: 600, cursor: "pointer",
          fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}>View portfolio →</button>
      </div>
    </div>
  );
}
