Blockly.Blocks['Radar'] = {
  init: function() {
    this.appendValueInput("radar")
        .setCheck("Number")
        .appendField("Radar (")
        .appendField(new Blockly.FieldAngle(60), "Scan direction")
        .appendField(")");
    this.setOutput(true, "Number");
    this.setColour(60);
 this.setTooltip("Function that scan de distance of an enemy by a giving angle");
 this.setHelpUrl("");
  }
};