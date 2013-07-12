// Do not edit this file; automatically generated by build.py.
"use strict";

Blockly.Python=Blockly.Generator.get("Python");Blockly.Python.addReservedWords("and,as,assert,break,class,continue,def,del,elif,else,except,exec,finally,for,from,global,if,import,in,is,lambda,not,or,pass,print,raise,return,try,while,with,yield,True,False,None,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,abs,divmod,input,open,staticmethod,all,enumerate,int,ord,str,any,eval,isinstance,pow,sum,basestring,execfile,issubclass,print,super,bin,file,iter,property,tuple,bool,filter,len,range,type,bytearray,float,list,raw_input,unichr,callable,format,locals,reduce,unicode,chr,frozenset,long,reload,vars,classmethod,getattr,map,repr,xrange,cmp,globals,max,reversed,zip,compile,hasattr,memoryview,round,__import__,complex,hash,min,set,apply,delattr,help,next,setattr,buffer,dict,hex,object,slice,coerce,dir,id,oct,sorted,intern");
Blockly.Python.ORDER_ATOMIC=0;Blockly.Python.ORDER_COLLECTION=1;Blockly.Python.ORDER_STRING_CONVERSION=1;Blockly.Python.ORDER_MEMBER=2;Blockly.Python.ORDER_FUNCTION_CALL=2;Blockly.Python.ORDER_EXPONENTIATION=3;Blockly.Python.ORDER_UNARY_SIGN=4;Blockly.Python.ORDER_BITWISE_NOT=4;Blockly.Python.ORDER_MULTIPLICATIVE=5;Blockly.Python.ORDER_ADDITIVE=6;Blockly.Python.ORDER_BITWISE_SHIFT=7;Blockly.Python.ORDER_BITWISE_AND=8;Blockly.Python.ORDER_BITWISE_XOR=9;Blockly.Python.ORDER_BITWISE_OR=10;
Blockly.Python.ORDER_RELATIONAL=11;Blockly.Python.ORDER_LOGICAL_NOT=12;Blockly.Python.ORDER_LOGICAL_AND=13;Blockly.Python.ORDER_LOGICAL_OR=14;Blockly.Python.ORDER_CONDITIONAL=15;Blockly.Python.ORDER_LAMBDA=16;Blockly.Python.ORDER_NONE=99;Blockly.Python.INFINITE_LOOP_TRAP=null;Blockly.Python.FUNCTION_NAME_PLACEHOLDER_="{{{}}}";Blockly.Python.FUNCTION_NAME_PLACEHOLDER_REGEXP_=RegExp(Blockly.Python.FUNCTION_NAME_PLACEHOLDER_,"g");
Blockly.Python.init=function(){Blockly.Python.definitions_={};Blockly.Python.functionNames_={};if(Blockly.Variables){Blockly.Python.variableDB_?Blockly.Python.variableDB_.reset():Blockly.Python.variableDB_=new Blockly.Names(Blockly.Python.RESERVED_WORDS_);for(var b=[],a=Blockly.Variables.allVariables(),c=0;c<a.length;c++)b[c]=Blockly.Python.variableDB_.getName(a[c],Blockly.Variables.NAME_TYPE)+" = None";Blockly.Python.definitions_.variables=b.join("\n")}};
Blockly.Python.finish=function(b){var a=[],c=[],d;for(d in Blockly.Python.definitions_){var e=Blockly.Python.definitions_[d];e.match(/^(from\s+\S+\s+)?import\s+\S+/)?a.push(e):c.push(e)}return(a.join("\n")+"\n\n"+c.join("\n\n")).replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+b};Blockly.Python.scrubNakedValue=function(b){return b+"\n"};Blockly.Python.quote_=function(b){b=b.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\%/g,"\\%").replace(/'/g,"\\'");return"'"+b+"'"};
Blockly.Python.scrub_=function(b,a){if(null===a)return"";var c="";if(!b.outputConnection||!b.outputConnection.targetConnection){var d=b.getCommentText();d&&(c+=Blockly.Generator.prefixLines(d,"# ")+"\n");for(var e=0;e<b.inputList.length;e++)b.inputList[e].type==Blockly.INPUT_VALUE&&(d=b.inputList[e].connection.targetBlock())&&(d=Blockly.Generator.allNestedComments(d))&&(c+=Blockly.Generator.prefixLines(d,"# "))}e=b.nextConnection&&b.nextConnection.targetBlock();e=this.blockToCode(e);return c+a+e};
Blockly.Python.provideFunction_=function(b,a){if(!Blockly.Python.definitions_[b]){var c=Blockly.Python.variableDB_.getDistinctName(b,Blockly.Generator.NAME_TYPE);Blockly.Python.functionNames_[b]=c;Blockly.Python.definitions_[b]=a.join("\n").replace(Blockly.Python.FUNCTION_NAME_PLACEHOLDER_REGEXP_,c)}return Blockly.Python.functionNames_[b]};Blockly.Python.colour={};Blockly.Python.colour_picker=function(){return["'"+this.getTitleValue("COLOUR")+"'",Blockly.Python.ORDER_ATOMIC]};Blockly.Python.colour_random=function(){Blockly.Python.definitions_.import_random="import random";return["'#%06x' % random.randint(0, 2**24 - 1)",Blockly.Python.ORDER_FUNCTION_CALL]};
Blockly.Python.colour_rgb=function(){var b=Blockly.Python.provideFunction_("colour_rgb",["def "+Blockly.Python.FUNCTION_NAME_PLACEHOLDER_+"(r, g, b):","  r = round(min(100, max(0, r)) * 2.55)","  g = round(min(100, max(0, g)) * 2.55)","  b = round(min(100, max(0, b)) * 2.55)","  return '#%02x%02x%02x' % (r, g, b)"]),a=Blockly.Python.valueToCode(this,"RED",Blockly.Python.ORDER_NONE)||0,c=Blockly.Python.valueToCode(this,"GREEN",Blockly.Python.ORDER_NONE)||0,d=Blockly.Python.valueToCode(this,"BLUE",
Blockly.Python.ORDER_NONE)||0;return[b+"("+a+", "+c+", "+d+")",Blockly.Python.ORDER_FUNCTION_CALL]};
Blockly.Python.colour_blend=function(){var b=Blockly.Python.provideFunction_("colour_blend",["def "+Blockly.Python.FUNCTION_NAME_PLACEHOLDER_+"(colour1, colour2, ratio):","  r1, r2 = int(colour1[1:3], 16), int(colour2[1:3], 16)","  g1, g2 = int(colour1[3:5], 16), int(colour2[3:5], 16)","  b1, b2 = int(colour1[5:7], 16), int(colour2[5:7], 16)","  ratio = min(1, max(0, ratio))","  r = round(r1 * (1 - ratio) + r2 * ratio)","  g = round(g1 * (1 - ratio) + g2 * ratio)","  b = round(b1 * (1 - ratio) + b2 * ratio)",
"  return '#%02x%02x%02x' % (r, g, b)"]),a=Blockly.Python.valueToCode(this,"COLOUR1",Blockly.Python.ORDER_NONE)||"'#000000'",c=Blockly.Python.valueToCode(this,"COLOUR2",Blockly.Python.ORDER_NONE)||"'#000000'",d=Blockly.Python.valueToCode(this,"RATIO",Blockly.Python.ORDER_NONE)||0;return[b+"("+a+", "+c+", "+d+")",Blockly.Python.ORDER_FUNCTION_CALL]};Blockly.Python.math={};Blockly.Python.addReservedWords("math,random");Blockly.Python.math_number=function(){var b=window.parseFloat(this.getTitleValue("NUM"));return[b,0>b?Blockly.Python.ORDER_UNARY_SIGN:Blockly.Python.ORDER_ATOMIC]};Blockly.Python.math_arithmetic=function(){var b=this.getTitleValue("OP"),a=Blockly.Python.math_arithmetic.OPERATORS[b],b=a[0],a=a[1],c=Blockly.Python.valueToCode(this,"A",a)||"0",d=Blockly.Python.valueToCode(this,"B",a)||"0";return[c+b+d,a]};
Blockly.Python.math_arithmetic.OPERATORS={ADD:[" + ",Blockly.Python.ORDER_ADDITIVE],MINUS:[" - ",Blockly.Python.ORDER_ADDITIVE],MULTIPLY:[" * ",Blockly.Python.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",Blockly.Python.ORDER_MULTIPLICATIVE],POWER:[" ** ",Blockly.Python.ORDER_EXPONENTIATION]};
Blockly.Python.math_single=function(){var b=this.getTitleValue("OP"),a,c;if("NEG"==b)return a=Blockly.Python.valueToCode(this,"NUM",Blockly.Python.ORDER_UNARY_SIGN)||"0",["-"+a,Blockly.Python.ORDER_UNARY_SIGN];Blockly.Python.definitions_.import_math="import math";c="SIN"==b||"COS"==b||"TAN"==b?Blockly.Python.valueToCode(this,"NUM",Blockly.Python.ORDER_MULTIPLICATIVE)||"0":Blockly.Python.valueToCode(this,"NUM",Blockly.Python.ORDER_NONE)||"0";switch(b){case "ABS":a="math.fabs("+c+")";break;case "ROOT":a=
"math.sqrt("+c+")";break;case "LN":a="math.log("+c+")";break;case "LOG10":a="math.log10("+c+")";break;case "EXP":a="math.exp("+c+")";break;case "POW10":a="math.pow(10,"+c+")";break;case "ROUND":a="round("+c+")";break;case "ROUNDUP":a="math.ceil("+c+")";break;case "ROUNDDOWN":a="math.floor("+c+")";break;case "SIN":a="math.sin("+c+" / 180.0 * math.pi)";break;case "COS":a="math.cos("+c+" / 180.0 * math.pi)";break;case "TAN":a="math.tan("+c+" / 180.0 * math.pi)"}if(a)return[a,Blockly.Python.ORDER_FUNCTION_CALL];
switch(b){case "ASIN":a="math.asin("+c+") / math.pi * 180";break;case "ACOS":a="math.acos("+c+") / math.pi * 180";break;case "ATAN":a="math.atan("+c+") / math.pi * 180";break;default:throw"Unknown math operator: "+b;}return[a,Blockly.Python.ORDER_MULTIPLICATIVE]};Blockly.Python.math_constant=function(){var b=this.getTitleValue("CONSTANT");"INFINITY"!=b&&(Blockly.Python.definitions_.import_math="import math");return Blockly.Python.math_constant.CONSTANTS[b]};
Blockly.Python.math_constant.CONSTANTS={PI:["math.pi",Blockly.Python.ORDER_MEMBER],E:["math.e",Blockly.Python.ORDER_MEMBER],GOLDEN_RATIO:["(1 + math.sqrt(5)) / 2",Blockly.Python.ORDER_MULTIPLICATIVE],SQRT2:["math.sqrt(2)",Blockly.Python.ORDER_MEMBER],SQRT1_2:["math.sqrt(1.0 / 2)",Blockly.Python.ORDER_MEMBER],INFINITY:["float('inf')",Blockly.Python.ORDER_ATOMIC]};
Blockly.Python.math_number_property=function(){var b=Blockly.Python.valueToCode(this,"NUMBER_TO_CHECK",Blockly.Python.ORDER_MULTIPLICATIVE);if(!b)return["False",Blockly.Python.ORDER_ATOMIC];var a=this.getTitleValue("PROPERTY"),c;if("PRIME"==a)return Blockly.Python.definitions_.import_math="import math",c=Blockly.Python.provideFunction_("isPrime",["def "+Blockly.Python.FUNCTION_NAME_PLACEHOLDER_+"(n):","  # http://en.wikipedia.org/wiki/Primality_test#Naive_methods","  # If n is not a number but a string, try parsing it.",
"  if type(n) not in (int, float, long):","    try:","      n = float(n)","    except:","      return False","  if n == 2 or n == 3:","    return True","  # False if n is negative, is 1, or not whole, or if n is divisible by 2 or 3.","  if n <= 1 or n % 1 != 0 or n % 2 == 0 or n % 3 == 0:","    return False","  # Check all the numbers of form 6k +/- 1, up to sqrt(n).","  for x in range(6, int(math.sqrt(n)) + 2, 6):","    if n % (x - 1) == 0 or n % (x + 1) == 0:","      return False","  return True"])+
"("+b+")",[c,Blockly.Python.ORDER_FUNCTION_CALL];switch(a){case "EVEN":c=b+" % 2 == 0";break;case "ODD":c=b+" % 2 == 1";break;case "WHOLE":c=b+" % 1 == 0";break;case "POSITIVE":c=b+" > 0";break;case "NEGATIVE":c=b+" < 0";break;case "DIVISIBLE_BY":a=Blockly.Python.valueToCode(this,"DIVISOR",Blockly.Python.ORDER_MULTIPLICATIVE);if(!a||"0"==a)return["False",Blockly.Python.ORDER_ATOMIC];c=b+" % "+a+" == 0"}return[c,Blockly.Python.ORDER_RELATIONAL]};
Blockly.Python.math_change=function(){var b=Blockly.Python.valueToCode(this,"DELTA",Blockly.Python.ORDER_ADDITIVE)||"0",a=Blockly.Python.variableDB_.getName(this.getTitleValue("VAR"),Blockly.Variables.NAME_TYPE);return a+" = ("+a+" if type("+a+") in (int, float, long) else 0) + "+b+"\n"};Blockly.Python.math_round=Blockly.Python.math_single;Blockly.Python.math_trig=Blockly.Python.math_single;
Blockly.Python.math_on_list=function(){var b=this.getTitleValue("OP"),a=Blockly.Python.valueToCode(this,"LIST",Blockly.Python.ORDER_NONE)||"[]";switch(b){case "SUM":a="sum("+a+")";break;case "MIN":a="min("+a+")";break;case "MAX":a="max("+a+")";break;case "AVERAGE":b=Blockly.Python.provideFunction_("math_mean",["def "+Blockly.Python.FUNCTION_NAME_PLACEHOLDER_+"(myList):","  localList = [e for e in myList if type(e) in (int, float, long)]","  if not localList: return","  return float(sum(localList)) / len(localList)"]);
a=b+"("+a+")";break;case "MEDIAN":b=Blockly.Python.provideFunction_("math_median",["def "+Blockly.Python.FUNCTION_NAME_PLACEHOLDER_+"(myList):","  localList = sorted([e for e in myList if type(e) in (int, float, long)])","  if not localList: return","  if len(localList) % 2 == 0:","    return (localList[len(localList) / 2 - 1] + localList[len(localList) / 2]) / 2.0","  else:","    return localList[(len(localList) - 1) / 2]"]);a=b+"("+a+")";break;case "MODE":b=Blockly.Python.provideFunction_("math_modes",
["def "+Blockly.Python.FUNCTION_NAME_PLACEHOLDER_+"(some_list):","  modes = []","  # Using a lists of [item, count] to keep count rather than dict",'  # to avoid "unhashable" errors when the counted item is itself a list or dict.',"  counts = []","  maxCount = 1","  for item in some_list:","    found = False","    for count in counts:","      if count[0] == item:","        count[1] += 1","        maxCount = max(maxCount, count[1])","        found = True","    if not found:","      counts.append([item, 1])",
"  for counted_item, item_count in counts:","    if item_count == maxCount:","      modes.append(counted_item)","  return modes"]);a=b+"("+a+")";break;case "STD_DEV":Blockly.Python.definitions_.import_math="import math";b=Blockly.Python.provideFunction_("math_standard_deviation",["def "+Blockly.Python.FUNCTION_NAME_PLACEHOLDER_+"(numbers):","  n = len(numbers)","  if n == 0: return","  mean = float(sum(numbers)) / n","  variance = sum((x - mean) ** 2 for x in numbers) / n","  return math.sqrt(variance)"]);
a=b+"("+a+")";break;case "RANDOM":Blockly.Python.definitions_.import_random="import random";a="random.choice("+a+")";break;default:throw"Unknown operator: "+b;}return[a,Blockly.Python.ORDER_FUNCTION_CALL]};Blockly.Python.math_modulo=function(){var b=Blockly.Python.valueToCode(this,"DIVIDEND",Blockly.Python.ORDER_MULTIPLICATIVE)||"0",a=Blockly.Python.valueToCode(this,"DIVISOR",Blockly.Python.ORDER_MULTIPLICATIVE)||"0";return[b+" % "+a,Blockly.Python.ORDER_MULTIPLICATIVE]};
Blockly.Python.math_constrain=function(){var b=Blockly.Python.valueToCode(this,"VALUE",Blockly.Python.ORDER_NONE)||"0",a=Blockly.Python.valueToCode(this,"LOW",Blockly.Python.ORDER_NONE)||"0",c=Blockly.Python.valueToCode(this,"HIGH",Blockly.Python.ORDER_NONE)||"float('inf')";return["min(max("+b+", "+a+"), "+c+")",Blockly.Python.ORDER_FUNCTION_CALL]};
Blockly.Python.math_random_int=function(){Blockly.Python.definitions_.import_random="import random";var b=Blockly.Python.valueToCode(this,"FROM",Blockly.Python.ORDER_NONE)||"0",a=Blockly.Python.valueToCode(this,"TO",Blockly.Python.ORDER_NONE)||"0";return["random.randint("+b+", "+a+")",Blockly.Python.ORDER_FUNCTION_CALL]};Blockly.Python.math_random_float=function(){Blockly.Python.definitions_.import_random="import random";return["random.random()",Blockly.Python.ORDER_FUNCTION_CALL]};Blockly.Python.text={};Blockly.Python.text=function(){return[Blockly.Python.quote_(this.getTitleValue("TEXT")),Blockly.Python.ORDER_ATOMIC]};
Blockly.Python.text_join=function(){var b;if(0==this.itemCount_)return["''",Blockly.Python.ORDER_ATOMIC];if(1==this.itemCount_)return b=Blockly.Python.valueToCode(this,"ADD0",Blockly.Python.ORDER_NONE)||"''",["str("+b+")",Blockly.Python.ORDER_FUNCTION_CALL];if(2==this.itemCount_){b=Blockly.Python.valueToCode(this,"ADD0",Blockly.Python.ORDER_NONE)||"''";var a=Blockly.Python.valueToCode(this,"ADD1",Blockly.Python.ORDER_NONE)||"''";return["str("+b+") + str("+a+")",Blockly.Python.ORDER_UNARY_SIGN]}b=
[];for(a=0;a<this.itemCount_;a++)b[a]=Blockly.Python.valueToCode(this,"ADD"+a,Blockly.Python.ORDER_NONE)||"''";a=Blockly.Python.variableDB_.getDistinctName("temp_value",Blockly.Variables.NAME_TYPE);b="''.join([str("+a+") for "+a+" in ["+b.join(", ")+"]])";return[b,Blockly.Python.ORDER_FUNCTION_CALL]};
Blockly.Python.text_append=function(){var b=Blockly.Python.variableDB_.getName(this.getTitleValue("VAR"),Blockly.Variables.NAME_TYPE),a=Blockly.Python.valueToCode(this,"TEXT",Blockly.Python.ORDER_NONE)||"''";return b+" = str("+b+") + str("+a+")\n"};Blockly.Python.text_length=function(){return["len("+(Blockly.Python.valueToCode(this,"VALUE",Blockly.Python.ORDER_NONE)||"''")+")",Blockly.Python.ORDER_FUNCTION_CALL]};
Blockly.Python.text_isEmpty=function(){return["not len("+(Blockly.Python.valueToCode(this,"VALUE",Blockly.Python.ORDER_NONE)||"''")+")",Blockly.Python.ORDER_LOGICAL_NOT]};Blockly.Python.text_indexOf=function(){var b="FIRST"==this.getTitleValue("END")?"find":"rfind",a=Blockly.Python.valueToCode(this,"FIND",Blockly.Python.ORDER_NONE)||"''";return[(Blockly.Python.valueToCode(this,"VALUE",Blockly.Python.ORDER_MEMBER)||"''")+"."+b+"("+a+") + 1",Blockly.Python.ORDER_MEMBER]};
Blockly.Python.text_charAt=function(){var b=this.getTitleValue("WHERE")||"FROM_START",a=Blockly.Python.valueToCode(this,"AT",Blockly.Python.ORDER_UNARY_SIGN)||"1",c=Blockly.Python.valueToCode(this,"VALUE",Blockly.Python.ORDER_MEMBER)||"''";switch(b){case "FIRST":return[c+"[0]",Blockly.Python.ORDER_MEMBER];case "LAST":return[c+"[-1]",Blockly.Python.ORDER_MEMBER];case "FROM_START":return a=Blockly.isNumber(a)?parseInt(a,10)-1:"int("+a+" - 1)",[c+"["+a+"]",Blockly.Python.ORDER_MEMBER];case "FROM_END":return[c+
"[-"+a+"]",Blockly.Python.ORDER_MEMBER];case "RANDOM":return Blockly.Python.definitions_.import_random="import random",b=Blockly.Python.provideFunction_("text_random_letter",["def "+Blockly.Python.FUNCTION_NAME_PLACEHOLDER_+"(text):","  x = int(random.random() * len(text))","  return text[x];"])+"("+c+")",[b,Blockly.Python.ORDER_FUNCTION_CALL]}throw"Unhandled option (text_charAt).";};
Blockly.Python.text_getSubstring=function(){var b=Blockly.Python.valueToCode(this,"STRING",Blockly.Python.ORDER_MEMBER)||"''",a=this.getTitleValue("WHERE1"),c=this.getTitleValue("WHERE2"),d=Blockly.Python.valueToCode(this,"AT1",Blockly.Python.ORDER_ADDITIVE)||"1",e=Blockly.Python.valueToCode(this,"AT2",Blockly.Python.ORDER_ADDITIVE)||"1";"FIRST"==a||"FROM_START"==a&&"1"==d?d="":"FROM_START"==a?d=Blockly.isNumber(d)?parseInt(d,10)-1:"int("+d+" - 1)":"FROM_END"==a&&(d=Blockly.isNumber(d)?-parseInt(d,
10):"-int("+d+")");"LAST"==c||"FROM_END"==c&&"1"==e?e="":"FROM_START"==a?e=Blockly.isNumber(e)?parseInt(e,10):"int("+e+")":"FROM_END"==a&&(Blockly.isNumber(e)?(e=1-parseInt(e,10),0==e&&(e="")):(Blockly.Python.definitions_.import_sys="import sys",e="int(1 - "+e+") or sys.maxsize"));return[b+"["+d+" : "+e+"]",Blockly.Python.ORDER_MEMBER]};
Blockly.Python.text_changeCase=function(){var b=this.getTitleValue("CASE"),b=Blockly.Python.text_changeCase.OPERATORS[b];return[(Blockly.Python.valueToCode(this,"TEXT",Blockly.Python.ORDER_MEMBER)||"''")+b,Blockly.Python.ORDER_MEMBER]};Blockly.Python.text_changeCase.OPERATORS={UPPERCASE:".upper()",LOWERCASE:".lower()",TITLECASE:".title()"};
Blockly.Python.text_trim=function(){var b=this.getTitleValue("MODE"),b=Blockly.Python.text_trim.OPERATORS[b];return[(Blockly.Python.valueToCode(this,"TEXT",Blockly.Python.ORDER_MEMBER)||"''")+b,Blockly.Python.ORDER_MEMBER]};Blockly.Python.text_trim.OPERATORS={LEFT:".lstrip()",RIGHT:".rstrip()",BOTH:".strip()"};Blockly.Python.text_print=function(){return"print("+(Blockly.Python.valueToCode(this,"TEXT",Blockly.Python.ORDER_NONE)||"''")+")\n"};
Blockly.Python.text_prompt=function(){var b=Blockly.Python.provideFunction_("text_prompt",["def "+Blockly.Python.FUNCTION_NAME_PLACEHOLDER_+"(msg):","  try:","    return raw_input(msg)","  except NameError:","    return input(msg)"]),a=Blockly.Python.quote_(this.getTitleValue("TEXT")),b=b+"("+a+")";"NUMBER"==this.getTitleValue("TYPE")&&(b="float("+b+")");return[b,Blockly.Python.ORDER_FUNCTION_CALL]};Blockly.Python.variables={};Blockly.Python.variables_get=function(){return[Blockly.Python.variableDB_.getName(this.getTitleValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.Python.ORDER_ATOMIC]};Blockly.Python.variables_set=function(){var b=Blockly.Python.valueToCode(this,"VALUE",Blockly.Python.ORDER_NONE)||"0";return Blockly.Python.variableDB_.getName(this.getTitleValue("VAR"),Blockly.Variables.NAME_TYPE)+" = "+b+"\n"};Blockly.Python.control={};
Blockly.Python.controls_if=function(){for(var b=0,a=Blockly.Python.valueToCode(this,"IF"+b,Blockly.Python.ORDER_NONE)||"False",c=Blockly.Python.statementToCode(this,"DO"+b)||"  pass\n",d="if "+a+":\n"+c,b=1;b<=this.elseifCount_;b++)a=Blockly.Python.valueToCode(this,"IF"+b,Blockly.Python.ORDER_NONE)||"False",c=Blockly.Python.statementToCode(this,"DO"+b)||"  pass\n",d+="elif "+a+":\n"+c;this.elseCount_&&(c=Blockly.Python.statementToCode(this,"ELSE")||"  pass\n",d+="else:\n"+c);return d};
Blockly.Python.controls_repeat=function(){var b=parseInt(this.getTitleValue("TIMES"),10),a=Blockly.Python.statementToCode(this,"DO")||"  pass\n";Blockly.Python.INFINITE_LOOP_TRAP&&(a=Blockly.Python.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+a);return"for "+Blockly.Python.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE)+" in range("+b+"):\n"+a};
Blockly.Python.controls_repeat_ext=function(){var b=Blockly.Python.valueToCode(this,"TIMES",Blockly.Python.ORDER_NONE)||"0",b=Blockly.isNumber(b)?parseInt(b,10):"int("+b+")",a=Blockly.Python.statementToCode(this,"DO")||"  pass\n";Blockly.Python.INFINITE_LOOP_TRAP&&(a=Blockly.Python.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+a);return"for "+Blockly.Python.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE)+" in range("+b+"):\n"+a};
Blockly.Python.controls_whileUntil=function(){var b="UNTIL"==this.getTitleValue("MODE"),b=Blockly.Python.valueToCode(this,"BOOL",b?Blockly.Python.ORDER_LOGICAL_NOT:Blockly.Python.ORDER_NONE)||"False",a=Blockly.Python.statementToCode(this,"DO")||"  pass\n";Blockly.Python.INFINITE_LOOP_TRAP&&(a=Blockly.Python.INFINITE_LOOP_TRAP.replace(/%1/g,'"'+this.id+'"')+a);"UNTIL"==this.getTitleValue("MODE")&&(b.match(/^\w+$/)||(b="("+b+")"),b="not "+b);return"while "+b+":\n"+a};
Blockly.Python.controls_for=function(){var b=Blockly.Python.variableDB_.getName(this.getTitleValue("VAR"),Blockly.Variables.NAME_TYPE),a=Blockly.Python.valueToCode(this,"FROM",Blockly.Python.ORDER_NONE)||"0",c=Blockly.Python.valueToCode(this,"TO",Blockly.Python.ORDER_NONE)||"0",d=Blockly.Python.valueToCode(this,"BY",Blockly.Python.ORDER_NONE)||"1",e=Blockly.Python.statementToCode(this,"DO")||"  pass\n";Blockly.Python.INFINITE_LOOP_TRAP&&(e=Blockly.Python.INFINITE_LOOP_TRAP.replace(/%1/g,'"'+this.id+
'"')+e);var g="",f;f=function(){return Blockly.Python.provideFunction_("upRange",["def "+Blockly.Python.FUNCTION_NAME_PLACEHOLDER_+"(start, stop, step):","  while start <= stop:","    yield start","    start += abs(step)"])};var h=function(){return Blockly.Python.provideFunction_("downRange",["def "+Blockly.Python.FUNCTION_NAME_PLACEHOLDER_+"(start, stop, step):","  while start >= stop:","    yield start","    start -= abs(step)"])};if(Blockly.isNumber(a)&&Blockly.isNumber(c)&&Blockly.isNumber(d))a=
parseFloat(a),c=parseFloat(c),d=Math.abs(parseFloat(d)),0===a%1&&0===c%1&&0===d%1?(a<=c?(c++,f=0==a&&1==d?c:a+", "+c,1!=d&&(f+=", "+d)):(c--,f=a+", "+c+", -"+d),f="range("+f+")"):(f=a<c?f():h(),f+="("+a+", "+c+", "+d+")");else{var k=function(a,c){if(Blockly.isNumber(a))a=parseFloat(a);else if(a.match(/^\w+$/))a="float("+a+")";else{var d=Blockly.Python.variableDB_.getDistinctName(b+c,Blockly.Variables.NAME_TYPE);g+=d+" = float("+a+")\n";a=d}return a},a=k(a,"_start"),c=k(c,"_end");k(d,"_inc");f="number"==
typeof a&&"number"==typeof c?a<c?f(a,c,d):h(a,c,d):"("+a+" <= "+c+") and "+f()+"("+a+", "+c+", "+d+") or "+h()+"("+a+", "+c+", "+d+")"}return g+="for "+b+" in "+f+":\n"+e};
Blockly.Python.controls_forEach=function(){var b=Blockly.Python.variableDB_.getName(this.getTitleValue("VAR"),Blockly.Variables.NAME_TYPE),a=Blockly.Python.valueToCode(this,"LIST",Blockly.Python.ORDER_RELATIONAL)||"[]",c=Blockly.Python.statementToCode(this,"DO")||"  pass\n";Blockly.Python.INFINITE_LOOP_TRAP&&(c=Blockly.Python.INFINITE_LOOP_TRAP.replace(/%1/g,'"'+this.id+'"')+c);return"for "+b+" in "+a+":\n"+c};
Blockly.Python.controls_flow_statements=function(){switch(this.getTitleValue("FLOW")){case "BREAK":return"break\n";case "CONTINUE":return"continue\n"}throw"Unknown flow statement.";};Blockly.Python.logic={};Blockly.Python.logic_compare=function(){var b=this.getTitleValue("OP"),b=Blockly.Python.logic_compare.OPERATORS[b],a=Blockly.Python.ORDER_RELATIONAL,c=Blockly.Python.valueToCode(this,"A",a)||"0",d=Blockly.Python.valueToCode(this,"B",a)||"0";return[c+" "+b+" "+d,a]};Blockly.Python.logic_compare.OPERATORS={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="};
Blockly.Python.logic_operation=function(){var b="AND"==this.getTitleValue("OP")?"and":"or",a="and"==b?Blockly.Python.ORDER_LOGICAL_AND:Blockly.Python.ORDER_LOGICAL_OR,c=Blockly.Python.valueToCode(this,"A",a)||"False",d=Blockly.Python.valueToCode(this,"B",a)||"False";return[c+" "+b+" "+d,a]};Blockly.Python.logic_negate=function(){return["not "+(Blockly.Python.valueToCode(this,"BOOL",Blockly.Python.ORDER_LOGICAL_NOT)||"False"),Blockly.Python.ORDER_LOGICAL_NOT]};
Blockly.Python.logic_boolean=function(){return["TRUE"==this.getTitleValue("BOOL")?"True":"False",Blockly.Python.ORDER_ATOMIC]};Blockly.Python.logic_null=function(){return["None",Blockly.Python.ORDER_ATOMIC]};
Blockly.Python.logic_ternary=function(){var b=Blockly.Python.valueToCode(this,"IF",Blockly.Python.ORDER_CONDITIONAL)||"False",a=Blockly.Python.valueToCode(this,"THEN",Blockly.Python.ORDER_CONDITIONAL)||"None",c=Blockly.Python.valueToCode(this,"ELSE",Blockly.Python.ORDER_CONDITIONAL)||"None";return[a+" if "+b+" else "+c,Blockly.Python.ORDER_CONDITIONAL]};Blockly.Python.procedures={};
Blockly.Python.procedures_defreturn=function(){for(var b=Blockly.Variables.allVariables(this),a=b.length-1;0<=a;a--){var c=b[a];-1==this.arguments_.indexOf(c)?b[a]=Blockly.Python.variableDB_.getName(c,Blockly.Variables.NAME_TYPE):b.splice(a,1)}b=b.length?"  global "+b.join(", ")+"\n":"";a=Blockly.Python.variableDB_.getName(this.getTitleValue("NAME"),Blockly.Procedures.NAME_TYPE);c=Blockly.Python.statementToCode(this,"STACK");Blockly.Python.INFINITE_LOOP_TRAP&&(c=Blockly.Python.INFINITE_LOOP_TRAP.replace(/%1/g,'"'+
this.id+'"')+c);var d=Blockly.Python.valueToCode(this,"RETURN",Blockly.Python.ORDER_NONE)||"";d?d="  return "+d+"\n":c||(c="  pass");for(var e=[],g=0;g<this.arguments_.length;g++)e[g]=Blockly.Python.variableDB_.getName(this.arguments_[g],Blockly.Variables.NAME_TYPE);b="def "+a+"("+e.join(", ")+"):\n"+b+c+d;b=Blockly.Python.scrub_(this,b);Blockly.Python.definitions_[a]=b;return null};Blockly.Python.procedures_defnoreturn=Blockly.Python.procedures_defreturn;
Blockly.Python.procedures_callreturn=function(){for(var b=Blockly.Python.variableDB_.getName(this.getTitleValue("NAME"),Blockly.Procedures.NAME_TYPE),a=[],c=0;c<this.arguments_.length;c++)a[c]=Blockly.Python.valueToCode(this,"ARG"+c,Blockly.Python.ORDER_NONE)||"None";return[b+"("+a.join(", ")+")",Blockly.Python.ORDER_FUNCTION_CALL]};
Blockly.Python.procedures_callnoreturn=function(){for(var b=Blockly.Python.variableDB_.getName(this.getTitleValue("NAME"),Blockly.Procedures.NAME_TYPE),a=[],c=0;c<this.arguments_.length;c++)a[c]=Blockly.Python.valueToCode(this,"ARG"+c,Blockly.Python.ORDER_NONE)||"None";return b+"("+a.join(", ")+")\n"};
Blockly.Python.procedures_ifreturn=function(){var b="if "+(Blockly.Python.valueToCode(this,"CONDITION",Blockly.Python.ORDER_NONE)||"False")+":\n";if(this.hasReturnValue_)var a=Blockly.Python.valueToCode(this,"VALUE",Blockly.Python.ORDER_NONE)||"None",b=b+("  return "+a+"\n");else b+="  return\n";return b};Blockly.Python.lists={};Blockly.Python.lists_create_empty=function(){return["[]",Blockly.Python.ORDER_ATOMIC]};Blockly.Python.lists_create_with=function(){for(var b=Array(this.itemCount_),a=0;a<this.itemCount_;a++)b[a]=Blockly.Python.valueToCode(this,"ADD"+a,Blockly.Python.ORDER_NONE)||"None";b="["+b.join(", ")+"]";return[b,Blockly.Python.ORDER_ATOMIC]};
Blockly.Python.lists_repeat=function(){var b=Blockly.Python.valueToCode(this,"ITEM",Blockly.Python.ORDER_NONE)||"None",a=Blockly.Python.valueToCode(this,"NUM",Blockly.Python.ORDER_MULTIPLICATIVE)||"0";return["["+b+"] * "+a,Blockly.Python.ORDER_MULTIPLICATIVE]};Blockly.Python.lists_length=function(){return["len("+(Blockly.Python.valueToCode(this,"VALUE",Blockly.Python.ORDER_NONE)||"[]")+")",Blockly.Python.ORDER_FUNCTION_CALL]};
Blockly.Python.lists_isEmpty=function(){return["not len("+(Blockly.Python.valueToCode(this,"VALUE",Blockly.Python.ORDER_NONE)||"[]")+")",Blockly.Python.ORDER_LOGICAL_NOT]};
Blockly.Python.lists_indexOf=function(){var b=Blockly.Python.valueToCode(this,"FIND",Blockly.Python.ORDER_NONE)||"[]",a=Blockly.Python.valueToCode(this,"VALUE",Blockly.Python.ORDER_MEMBER)||"''";return[("FIRST"==this.getTitleValue("END")?Blockly.Python.provideFunction_("first_index",["def "+Blockly.Python.FUNCTION_NAME_PLACEHOLDER_+"(myList, elem):","  try: theIndex = myList.index(elem) + 1","  except: theIndex = 0","  return theIndex"]):Blockly.Python.provideFunction_("last_index",["def "+Blockly.Python.FUNCTION_NAME_PLACEHOLDER_+
"(myList, elem):","  try: theIndex = len(myList) - myList[::-1].index(elem)","  except: theIndex = 0","  return theIndex"]))+"("+a+", "+b+")",Blockly.Python.ORDER_MEMBER]};
Blockly.Python.lists_getIndex=function(){var b=this.getTitleValue("MODE")||"GET",a=this.getTitleValue("WHERE")||"FROM_START",c=Blockly.Python.valueToCode(this,"AT",Blockly.Python.ORDER_UNARY_SIGN)||"1",d=Blockly.Python.valueToCode(this,"VALUE",Blockly.Python.ORDER_MEMBER)||"[]";if("FIRST"==a){if("GET"==b)return[d+"[0]",Blockly.Python.ORDER_MEMBER];a=d+".pop(0)";if("GET_REMOVE"==b)return[a,Blockly.Python.ORDER_FUNCTION_CALL];if("REMOVE"==b)return a+"\n"}else if("LAST"==a){if("GET"==b)return[d+"[-1]",
Blockly.Python.ORDER_MEMBER];a=d+".pop()";if("GET_REMOVE"==b)return[a,Blockly.Python.ORDER_FUNCTION_CALL];if("REMOVE"==b)return a+"\n"}else if("FROM_START"==a){c=Blockly.isNumber(c)?parseInt(c,10)-1:"int("+c+" - 1)";if("GET"==b)return[d+"["+c+"]",Blockly.Python.ORDER_MEMBER];a=d+".pop("+c+")";if("GET_REMOVE"==b)return[a,Blockly.Python.ORDER_FUNCTION_CALL];if("REMOVE"==b)return a+"\n"}else if("FROM_END"==a){if("GET"==b)return[d+"[-"+c+"]",Blockly.Python.ORDER_MEMBER];a=d+".pop(-"+c+")";if("GET_REMOVE"==
b)return[a,Blockly.Python.ORDER_FUNCTION_CALL];if("REMOVE"==b)return a+"\n"}else if("RANDOM"==a){Blockly.Python.definitions_.import_random="import random";if("GET"==b)return["random.choice("+d+")",Blockly.Python.ORDER_FUNCTION_CALL];var e=Blockly.Python.provideFunction_("lists_remove_random_item",["def "+Blockly.Python.FUNCTION_NAME_PLACEHOLDER_+"(myList):","def "+e+"(myList):","  x = int(random.random() * len(myList))","  return myList.pop(x)"]),a=e+"("+d+")";if("GET"==b||"GET_REMOVE"==b)return[a,
Blockly.Python.ORDER_FUNCTION_CALL];if("REMOVE"==b)return a+"\n"}throw"Unhandled combination (lists_getIndex).";};
Blockly.Python.lists_setIndex=function(){var b=Blockly.Python.valueToCode(this,"LIST",Blockly.Python.ORDER_MEMBER)||"[]",a=this.getTitleValue("MODE")||"GET",c=this.getTitleValue("WHERE")||"FROM_START",d=Blockly.Python.valueToCode(this,"AT",Blockly.Python.ORDER_NONE)||"1",e=Blockly.Python.valueToCode(this,"TO",Blockly.Python.ORDER_NONE)||"None";if("FIRST"==c){if("SET"==a)return b+"[0] = "+e+"\n";if("INSERT"==a)return b+".insert(0, "+e+")\n"}else if("LAST"==c){if("SET"==a)return b+"[-1] = "+e+"\n";
if("INSERT"==a)return b+".append("+e+")\n"}else if("FROM_START"==c){d=Blockly.isNumber(d)?parseInt(d,10)-1:"int("+d+" - 1)";if("SET"==a)return b+"["+d+"] = "+e+"\n";if("INSERT"==a)return b+".insert("+d+", "+e+")\n"}else if("FROM_END"==c){if("SET"==a)return b+"[-"+d+"] = "+e+"\n";if("INSERT"==a)return b+".insert(-"+d+", "+e+")\n"}else if("RANDOM"==c){Blockly.Python.definitions_.import_random="import random";b.match(/^\w+$/)?c="":(c=Blockly.Python.variableDB_.getDistinctName("tmp_list",Blockly.Variables.NAME_TYPE),
d=c+" = "+b+"\n",b=c,c=d);d=Blockly.Python.variableDB_.getDistinctName("tmp_x",Blockly.Variables.NAME_TYPE);c+=d+" = int(random.random() * len("+b+"))\n";if("SET"==a)return c+(b+"["+d+"] = "+e+"\n");if("INSERT"==a)return c+=b+".insert("+d+", "+e+")\n"}throw"Unhandled combination (lists_setIndex).";};
Blockly.Python.lists_getSublist=function(){var b=Blockly.Python.valueToCode(this,"LIST",Blockly.Python.ORDER_MEMBER)||"[]",a=this.getTitleValue("WHERE1"),c=this.getTitleValue("WHERE2"),d=Blockly.Python.valueToCode(this,"AT1",Blockly.Python.ORDER_ADDITIVE)||"1",e=Blockly.Python.valueToCode(this,"AT2",Blockly.Python.ORDER_ADDITIVE)||"1";"FIRST"==a||"FROM_START"==a&&"1"==d?d="":"FROM_START"==a?d=Blockly.isNumber(d)?parseInt(d,10)-1:"int("+d+" - 1)":"FROM_END"==a&&(d=Blockly.isNumber(d)?-parseInt(d,10):
"-int("+d+")");"LAST"==c||"FROM_END"==c&&"1"==e?e="":"FROM_START"==a?e=Blockly.isNumber(e)?parseInt(e,10):"int("+e+")":"FROM_END"==a&&(Blockly.isNumber(e)?(e=1-parseInt(e,10),0==e&&(e="")):(Blockly.Python.definitions_.import_sys="import sys",e="int(1 - "+e+") or sys.maxsize"));return[b+"["+d+" : "+e+"]",Blockly.Python.ORDER_MEMBER]};