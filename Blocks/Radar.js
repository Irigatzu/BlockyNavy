Blockly.Blocks['Radar'] = {
  init: function() {
    this.appendValueInput("radar")
        .setCheck("Angle")
        .appendField("Radar (")
        .appendField(new Blockly.FieldAngle(60), "Angle")
        .appendField(")");
    this.setOutput(true, "Angle");
    this.setColour(60);
 this.setTooltip("Function that scan de distance of an enemy by a giving angle");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['Radar'] = function(block) {
  var angle_angle = block.getFieldValue('Angle');
  var value_move = Blockly.JavaScript.valueToCode(block, 'Radar', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'radar()';
  return code;
};