Blockly.Blocks['Cannon'] = {
  init: function() {
     this.appendValueInput("Cannon")
        .setCheck("Number")
        .appendField("Cannon (")
        .appendField(new Blockly.FieldAngle(90), "Angle")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(0, 0, 100), "Distance")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("Shoot a cannon ball introducing an angle and a distance");
 this.setHelpUrl("");
    //this.setOutput(true, 'Number');
 //this.setTooltip("");
 //this.setHelpUrl("");
  }
  };
Blockly.JavaScript['Cannon'] = function(block) {
  var angle_angle = block.getFieldValue('Angle');
  var number_distance = block.getFieldValue('Distance');
  var value_move = Blockly.JavaScript.valueToCode(block, 'Cannon', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'ball.move('+angle_angle+','+number_distance+')';
  return code;
};