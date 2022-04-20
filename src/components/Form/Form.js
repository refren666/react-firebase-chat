import React from "react";
import { FormControl, Input, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import styles from "./Form.module.css";

export const Form = ({ input, sendMessage, handleInput }) => {
  return (
    <form className={styles.appForm}>
      <FormControl className={styles.formControl}>
        <Input
          className={styles.inputField}
          placeholder="Email a message..."
          value={input}
          onChange={handleInput}
        />
        <IconButton
          className={styles.iconButton}
          type="submit"
          variant="contained"
          color="primary"
          onClick={sendMessage}
          disabled={!input}
        >
          <SendIcon />
        </IconButton>
      </FormControl>
    </form>
  );
};
