module.exports = [{"constant":true,"inputs":[],"name":"galleass","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getCitizenCharacteristics","outputs":[{"name":"strength","type":"uint16"},{"name":"stamina","type":"uint16"},{"name":"dexterity","type":"uint16"},{"name":"intelligence","type":"uint16"},{"name":"ambition","type":"uint16"},{"name":"rigorous","type":"uint16"},{"name":"industrious","type":"uint16"},{"name":"ingenuity","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_galleass","type":"address"}],"name":"upgradeGalleass","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_tile","type":"uint8"}],"name":"moveCitizen","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getCitizenStatus","outputs":[{"name":"status","type":"uint8"},{"name":"x","type":"uint16"},{"name":"y","type":"uint16"},{"name":"tile","type":"uint8"},{"name":"data","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"food1","type":"bytes32"},{"name":"food2","type":"bytes32"},{"name":"food3","type":"bytes32"},{"name":"_x","type":"uint16"},{"name":"_y","type":"uint16"},{"name":"_tile","type":"uint8"}],"name":"createCitizen","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getCitizenGenes","outputs":[{"name":"head","type":"uint16"},{"name":"hair","type":"uint16"},{"name":"eyes","type":"uint16"},{"name":"nose","type":"uint16"},{"name":"mouth","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_contract","type":"address"},{"name":"_permission","type":"bytes32"}],"name":"hasPermission","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_status","type":"uint8"}],"name":"setStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"getContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_price","type":"uint256"}],"name":"setPrice","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_galleass","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_id","type":"uint256"},{"indexed":false,"name":"_tile","type":"uint8"},{"indexed":false,"name":"status","type":"uint8"},{"indexed":false,"name":"owner","type":"address"}],"name":"Debug","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]