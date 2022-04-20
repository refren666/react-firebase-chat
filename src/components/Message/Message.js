import { Card, CardContent, Typography } from "@mui/material";
import React, { forwardRef } from "react";

import styles from "./Message.module.css";

export const Message = forwardRef(({ message, username }, ref) => {
  // when it's the one who's writing the message
  const isUser = username === message.username;

  return (
    <div
      ref={ref}
      className={`${styles.message} ${isUser && styles.userMessage}`}
    >
      <Card className={isUser ? styles.userCard : styles.guestCard}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${message.username || "Unknown"}:`} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});
