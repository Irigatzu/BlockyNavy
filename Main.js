<script src="https://unpkg.com/blockly/blockly.min.js"></script>
<script src="blockly_compressed.js"></script>
<script src="blocks_compressed.js"></script>
<script src="msg/js/en.js"></script>
import Blockly from 'blockly';
<div id="blocklyDiv" style="height: 480px; width: 600px;"></div>
<xml id="toolbox" style="display: none">
  <block type="controls_if"></block>
  <block type="controls_repeat_ext"></block>
  <block type="logic_compare"></block>
  <block type="math_number"></block>
  <block type="math_arithmetic"></block>
  <block type="text"></block>
  <block type="text_print"></block>
</xml>
<script>
  var workspace = Blockly.inject('blocklyDiv',
      {toolbox: document.getElementById('toolbox')});
</script>