import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import { useHistory } from "react-router-dom"
import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import Input from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"
import InputLabel from "@material-ui/core/InputLabel"
import { Icon } from "@material-ui/core"

export function PayComponent({ onSubmit, sending, ...rest }) {
  const history = useHistory()
  const [recipient, setRecipient] = useState(rest.recipient)
  const [amount, setAmount] = useState(rest.amount)
  const [note, setNote] = useState("")
  return (
    <div>
      {sending && (
        <div
          style={{
            position: "absolute",
            right: 0,
            left: 0,
            bottom: 0,
            top: 0,
            background: "rgba(0,0,0,0.6)",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          <div style={{ marginTop: 200, textAlign: "center", color: "#FFF" }}>
            Geld wird gesendet. Bitte warten.
          </div>
        </div>
      )}
      <FormControl fullWidth>
        <InputLabel htmlFor="recipient-address">Senden an</InputLabel>
        <Input
          id="recipient-address"
          type={"text"}
          value={recipient}
          onChange={(event) => {
            setRecipient(event.target.value)
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="scanQR"
                onClick={() => {
                  history.push("scanQR")
                }}
              >
                {<Icon>center_focus_weak</Icon>}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="amount">Wie viel?</InputLabel>
        <Input
          id="amount"
          type={"text"}
          value={amount}
          onChange={(event) => {
            setAmount(event.target.value)
          }}
          endAdornment={<InputAdornment position="end">dgE</InputAdornment>}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="notiz"
          label="Notiz (optional)"
          type="search"
          onChange={(event) => {
            setNote(event.target.value)
          }}
          value={note}
        />
      </FormControl>

      <div
        style={{
          position: "absolute",
          bottom: 80,
          flex: 1,
          left: -10,
          right: -10,
          padding: "0 40px",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        <Button
          variant="contained"
          onClick={() => onSubmit({ recipient, amount, note })}
          style={{ width: "100%" }}
          color="primary"
        >
          Zahlen
        </Button>
      </div>
    </div>
  )
}
