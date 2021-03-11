(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{393:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[e._v("#")]),e._v(" Functions")]),e._v(" "),a("p",[e._v("The first byte of a request contains either the function ID in binary format or a text-mode identifier (one of '!', ':' or '#'). Input data with unknown first byte is ignored.")]),e._v(" "),a("h3",{attrs:{id:"text-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-mode"}},[e._v("#")]),e._v(" Text mode")]),e._v(" "),a("p",[e._v("Each request message consists of a function name (e.g. read) followed by valid JSON string containing the payload data. A request starts with an exclamation mark (!) in front of the function name.")]),e._v(" "),a("p",[e._v("The response starts with a colon (😃 followed by the the status code and a plain text description of the status finished with a '.'. The description message content is not strictly specified and can be either the description from above table or a more verbose message. However, it must contain only one dot at the end of the description, signifying the end of the description.")]),e._v(" "),a("p",[e._v("The following bytes after the dot contain the requested data. The end of the data is automatically recognized when the last character for a valid JSON text is received, e.g. '}'. In addition to that, the response must be finished with a newline (LF recommended, but CRLF also allowed).")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Request:\n!(name) (options) (JSON data)\n\nResponse:\n:(status code) (status message). (JSON data)\n\nPublication message:\n# (JSON data)\n")])])]),a("p",[e._v("Some examples are shown below.")]),e._v(" "),a("h3",{attrs:{id:"binary-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binary-mode"}},[e._v("#")]),e._v(" Binary mode")]),e._v(" "),a("p",[e._v("In the binary mode, the values of data objects are encoded using the CBOR format. Thus, numbers are encoded using big endian format (most significant byte transferred first).")]),e._v(" "),a("p",[e._v("The general format of a binary mode message:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("+-------------+====================+=============================================+\n| Function ID | Options (optional) | Payload data (object values in CBOR format) |\n+-------------+====================+=============================================+\n\nLegend:\n---------  single byte\n=========  multiple bytes\n")])])]),a("p",[e._v("In order to minimize data consumption, the CBOR format is only used for the actual data object values (because data format and size are unknown). Well-known data structures like arrays of Data Object IDs in read requests are encoded directly using unsigned 16-bit integers (see below).")]),e._v(" "),a("p",[e._v("The length of the entire request or response is not encoded in the ThingSet protocol. Packet length as well as checksums should be encoded in lower layer protocols. It is assumed that the parser always receives a complete request.")]),e._v(" "),a("p",[a("em",[e._v("Remark for future protocol versions:")]),e._v(" If proven to be necessary, the data could be terminated with one 0xFF character at the end of each request. Therefore, 0xF is a reserved category ID.")]),e._v(" "),a("h2",{attrs:{id:"read-data-object-id-0x01"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read-data-object-id-0x01"}},[e._v("#")]),e._v(" Read data object (ID 0x01)")]),e._v(" "),a("p",[e._v("The read function can read one or more data objects. The objects are identified by their ID (binary mode) or by their name (text-base mode).")]),e._v(" "),a("h4",{attrs:{id:"text-mode-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-mode-2"}},[e._v("#")]),e._v(" Text mode")]),e._v(" "),a("p",[e._v("The names of the data objects are passed to the function as a single string or as an array of strings.")]),e._v(" "),a("p",[e._v("The response contains a status code and the requested data. If a single data object was requested, the returned data is also a single JSON primitive (number, string, true/fals, depending on data type). Multiple objects were requested, the response is an array containing the requested data objects in the same order.")]),e._v(" "),a("p",[e._v('Example 1: Request single data object "enableSwitch"')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('!read "enableSwitch"\n:0 Success. true\n')])])]),a("p",[e._v("Example 2: Request multiple data objects:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('!read ["vBat", "tAmbient"]\n:0 Success. [15.2, 22]\n')])])]),a("h3",{attrs:{id:"binary-mode-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binary-mode-2"}},[e._v("#")]),e._v(" Binary mode")]),e._v(" "),a("p",[e._v("General format description:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Request:\n+------+========+     +========+\n| 0x01 | 0xYYYY | ... | 0xYYYY |\n+------+========+     +========+\n\nResponse:\n+------+===========+     +===========+\n| 0xZZ | CBOR data | ... | CBOR data |\n+------+===========+     +===========+\n\n0xYYYY: Function ID(s)\n0xZZ:   Response code (0x80 for success)\n")])])]),a("p",[e._v('Example 1: Request single data object "enableSwitch"')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Request:\n0x01                Function ID (read)\n    0x3001          Data Object ID (enableSwitch)\n\nResponse:\n0x80                Status code (Success)\n    0xf5            CBOR data: true\n")])])]),a("p",[e._v("Example 2: Request multiple data objects:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Request:\n0x01                Function ID (read)\n    0x4001          Data Object ID (vBat)\n    0x4002          Data Object ID (tAmbient)\n\nResponse:\n0x80                    Status code (Success)\n    0xfa 0x41733333     CBOR data (float32): 15.2\n    0x16                CBOR data (integer): 22\n")])])]),a("h2",{attrs:{id:"write-data-object-0x02"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#write-data-object-0x02"}},[e._v("#")]),e._v(" Write data object (0x02)")]),e._v(" "),a("p",[e._v("Requests to overwrite a data object.")]),e._v(" "),a("p",[e._v("The device must support a write request using the same data type as used in the response of a read request for the given objects. Optionally, the device may also accept different data types (e.g. float32 instead of int) and convert the data internally.")]),e._v(" "),a("p",[e._v("Data of settings will be written into persistent memory, so it is not allowed to change settings periodically. Only data types of category input might be changed regularly.")]),e._v(" "),a("p",[e._v("If the data type is not supported, an error status code (34) is responded.")]),e._v(" "),a("h3",{attrs:{id:"text-mode-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-mode-3"}},[e._v("#")]),e._v(" Text mode")]),e._v(" "),a("p",[e._v("Example 1: Disable the switch")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('!write {"enableSwitch" : false}\n:0 Success.\n')])])]),a("p",[e._v("Example 2: Attempt to write read-only measurement values (output category)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('!write { "vBat" : 15.2, "tAmbient" : 22 }\n:36 Access denied.\n')])])]),a("h3",{attrs:{id:"binary-mode-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binary-mode-3"}},[e._v("#")]),e._v(" Binary mode")]),e._v(" "),a("p",[e._v("General layout:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Request:\n+------+========+===========+     +========+===========+\n| 0x02 | 0xYYYY | CBOR data | ... | 0xYYYY | CBOR data |\n+------+========+===========+     +========+===========+\n\nResponse:\n+------+\n| 0xZZ |\n+------+\n\n0xYYYY: Data Object ID(s)\n0xZZ:   Response code (0x80 for success)\n")])])]),a("p",[e._v("Example 1: Disable the switch")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Request:\n0x02                Function ID (write)\n    0x3001          Data Object ID (enableSwitch)\n    0xf4            CBOR data: false\n\nResponse:\n0x80                Status code: Success\n")])])]),a("p",[e._v("Example 2: Attempt to write read-only measurement values (output category)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Request:\n0x02                    Function ID (write)\n    0x4001              Data Object ID (vBat)\n    0xfa 0x41733333     CBOR data (float32): 15.2\n    0x4002              Data Object ID (tAmbient)\n    0x16                CBOR data (integer): 22\n\nResponse:\n0xa4                    Status code (Access denied)\n")])])]),a("h2",{attrs:{id:"list-data-objects-0x03"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-data-objects-0x03"}},[e._v("#")]),e._v(" List data objects (0x03)")]),e._v(" "),a("p",[e._v("Useful function for device discovery, as it lists all available data objects or all data objects of one category.")]),e._v(" "),a("p",[e._v("In binary mode, the data IDs are returned, in text mode, an array of strings.")]),e._v(" "),a("p",[e._v("Only those data objects are returned which are at least readable. Thus, the result might differ after authentication.")]),e._v(" "),a("h3",{attrs:{id:"text-mode-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-mode-4"}},[e._v("#")]),e._v(" Text mode")]),e._v(" "),a("p",[e._v("Example 1: List all values in category output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('!list "output"\n:0 Success. [ "vBat", "tAmbient" ]\n')])])]),a("p",[e._v("Example 2: List all accessible values of the device.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('!list\n:0 Success. { "output" : [ "vBat", "tAmbient" ], "input" : [ "loadEn" ]}\n')])])]),a("h3",{attrs:{id:"binary-mode-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binary-mode-4"}},[e._v("#")]),e._v(" Binary mode")]),e._v(" "),a("p",[e._v("General format description:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Request:\n+------+========+\n| 0x03 | 0xXXXX |\n+------+========+\n\nResponse:\n+------+========+     +========+\n| 0xZZ | 0xYYYY | ... | 0xYYYY |\n+------+========+     +========+\n\n0xXXXX: Data Object ID wildcard (all or specific category)\n0xYYYY: Data Object ID(s) belonging to requested category\n0xZZ:   Response code (0x80 for success)\n")])])]),a("p",[e._v("Example 1: List all values in category output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Request:\n0x03                Function ID (list)\n    0x4000          Data Object ID wildcard (category "output")\n\nResponse:\n0x80                Status code (Success)\n    0x4001          Data Object ID (vBat)\n    0x4002          Data Object ID (tAmbient)\n')])])]),a("p",[e._v("Example 2: List all accessible values of the device.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Request:\n0x03                Function ID (list)\n    0x0000          Data Object ID wildcard (all data objects)\n\nResponse:\n0x80                Status code: (Success)\n    0x1001          Data Object ID (manufacturer)\n    0x3001          Data Object ID (enableSwitch)\n    0x4001          Data Object ID (vBat)\n    0x4002          Data Object ID (tAmbient)\n")])])]),a("h2",{attrs:{id:"get-data-object-name-0x04"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-data-object-name-0x04"}},[e._v("#")]),e._v(" Get data object name (0x04)")]),e._v(" "),a("p",[e._v("Returns the name of a data object specified by its ID. This function makes sense for binary mode only, as the text-based mode uses the names directly.")]),e._v(" "),a("h3",{attrs:{id:"binary-mode-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binary-mode-5"}},[e._v("#")]),e._v(" Binary mode")]),e._v(" "),a("p",[e._v("General format description:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Request:\n+------+========+     +========+\n| 0x04 | 0xYYYY | ... | 0xYYYY |\n+------+========+     +========+\n\nResponse:\n+------+===========+     +===========+\n| 0xZZ | CBOR data | ... | CBOR data |\n+------+===========+     +===========+\n\n0xYYYY: Data Object ID(s)\n0xZZ:   Response code (0x80 for success)\n")])])]),a("p",[e._v("Example 1: Request name of data object ID 0x4001 (vBat)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Request:\n0x04                        Function ID (name)\n    0x4001                  Data Object ID (vBat)\n\nResponse:\n0x80                        Status code: Success.\n    0x64 0x76426174         string of length 4: "vBat"\n')])])]),a("p",[e._v("Example 2: Request name of multiple data objects")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Request:\n0x04                            Function ID (name)\n    0x4001                      Data Object ID (vBat)\n    0x4002                      Data Object ID (tAmbient)\n\nResponse:\n0x80                            Status code: Success.\n    0x64 0x76426174             CBOR data (4-byte string): "vBat"\n    0x68 0x74416D6269656E74     CBOR data (8-byte string): "tAmbient"\n')])])]),a("h2",{attrs:{id:"preliminary-publication-request-0x05"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preliminary-publication-request-0x05"}},[e._v("#")]),e._v(" PRELIMINARY: Publication request (0x05)")]),e._v(" "),a("p",[a("em",[e._v("Remark: It should be possible to tell the device to publish certain data on a regular basis through a defined communication channel (UART, CAN, LoRa, etc.). It is not feasible to define different publication intervals and communication channels for each data object, as this would create lots of programming effort. On the other hand, pre-defined fixed intervals are maybe not flexible enough.")])]),e._v(" "),a("p",[a("em",[e._v("Good ideas for simple protocol layout are welcome!")])]),e._v(" "),a("h3",{attrs:{id:"text-mode-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-mode-5"}},[e._v("#")]),e._v(" Text mode")]),e._v(" "),a("p",[e._v("Example 1: Publish two values every 1000 milliseconds")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('!pub 1000 ["vBat", "tAmbient"]\n:0 Success.\n')])])]),a("p",[e._v("Now, every second the following message is sent by the device:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('# {"vBat":15.2,"tAmbient":22}\n')])])]),a("h2",{attrs:{id:"preliminary-authentication-0x06"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preliminary-authentication-0x06"}},[e._v("#")]),e._v(" PRELIMINARY: Authentication (0x06)")]),e._v(" "),a("p",[e._v("Requests a challenge from the device to authenticate using secret password + hashing function.")]),e._v(" "),a("p",[e._v("Procedure of authentication:")]),e._v(" "),a("ol",[a("li",[e._v("The client requests a challenge from the device.")]),e._v(" "),a("li",[e._v("The device responds with the challenge (random number, length t.b.d.)")]),e._v(" "),a("li",[e._v("The client generates a response code based on the received challenge and the secret password. The response code is hashed (algorithm t.b.d., maybe SHA-3) and sent to the device.")]),e._v(" "),a("li",[e._v("The device calculates the same response code (with the same secret password stored in the device) and compares it with the received code. If both math, authentication was successful.")])]),e._v(" "),a("h4",{attrs:{id:"text-mode-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-mode-6"}},[e._v("#")]),e._v(" Text mode")]),e._v(" "),a("p",[e._v("If the auth request is empty, a new challenge is responded. In the second request, the calculated response code follows after the auth request. In case of successful authentication, status code 0 is responded (without additional data).")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("!auth\n:0 Success. <challenge>\n\n!auth <response code>\n:0 Success.\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);