Blockly.Blocks['Move'] = {
  init: function() {
    this.appendValueInput("Move")
        .setCheck("Number")
        .appendField("Move (")
        .appendField(new Blockly.FieldAngle(90), "Angle")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(0, 0, 100), "Distance")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Move the boat introducing an angle and a distance");
 this.setHelpUrl("");
  }
};