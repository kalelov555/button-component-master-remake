import React from "react";
import Button from "./Button";
import "../css/ButtonsDiv.scss"

export default function ButtonsDiv() {
    return (
      <div className="buttons-container">
        <Button color="default" variant="outline" />
        <Button disabled color="danger" />
        <br></br>
        <Button disableShadow color="primary" variant="outline" />
        <Button variant="outline" color="danger" />
        <br></br>
        <Button variant="text" />
        <Button variant="text" disabled color="default" />
        <br></br>
        <Button size="sm" />
        <Button size="md" />
        <Button size="lg" variant="outline"/>
        <br></br>
        <Button startIcon="localGroceryStore" />
        <Button endIcon="localGroceryStore" variant="text" />
      </div>
    );
}