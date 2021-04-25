Blockly.Blocks['Cannon'] = {
  init: function() {
    this.appendValueInput("90")
        .appendField("Cannon(")
        .appendField(new Blockly.FieldAngle(90), "Angle Of shoot")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(0, 0, 100), "Distance of shoot")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    //this.setOutput(true, 'Number');
 //this.setTooltip("");
 //this.setHelpUrl("");
  }
};