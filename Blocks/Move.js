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
Blockly.JavaScript['Move'] = function(block) {
  var angle_angle = block.getFieldValue('Angle');
  var number_distance = block.getFieldValue('Distance');
  var value_move = Blockly.JavaScript.valueToCode(block, 'Move', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Move('+angle_angle+','+number_distance+')';
  return code;
};