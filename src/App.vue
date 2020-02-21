<template>
  <div id="app">
<!-- BASIC INFO ABOUT HOW VUE WORKS -- IMPORTANT TO UNDERSTAND BEFORE KNOWING HOW THIS TOOL WORKS

Every .vue file is divided into three parts:
  1) template -> whatever is enclosed between <template></template>
  2) scripts -> whatever is enclosed between <script></script>
  3) style -> whatever is enclosed between <style></style>

  #1) Templates i) inside template part you can only write pure html, however with the help of vue, you can additionally put dynamic variables and methods
                  For example, you can use @click on any html tag to attach a click listner to that element and when you specify @click="someMethod()", it means that when that element is clicked
                  someMethod() function will be executed. these methods are defined inside scripts tag under methods:{ ... }   section} 
                   basically whenever you use @ infront, it means you are calling an action, actions in html can be @click, @change, @keyup @keydown etc

                ii) also inside templates you can use variables which are defined inside scripts under  data(){ ... } section
                  you can simply output the variable inside the template by enclosing variable name in double flower brackets e.g {{ variableName }}
                  

                iii) Moreover you can use methods to return variables like someMethod(){ return someVariable; }  and use {{ someMethod() }} to print the variable in html  indirectly 
                 
                 
                 iv) I also have used v-model="variableName" , what it does is it binds the <input> element to the variable named variableName, its a two way binding which means whenever
                      a variable changes, value in input changes, and vice versa. you dont need to write extra code like attach @change="someMethod" to input, then extract what value input has and then assign that value to variable, v-model does all that stuff iteslf... 
            
              
                v) you can attach dynamic attributes with dynamic values with : (colon symbol) eg
                  if this is the link tag <a href="google.com">Click Here </a> .... you can make href attribute dynamic
                  by using it like <a :href="someVariable">Click Here </a>  .. similarily
                   image tag -----   <img src="url/of/some/photo"/> can be  <img :src="someVariable"/>

                  You can make any attribute of html dynamic by attaching the : (in front of it)

                  so with @ and : you can attach listners and binders respectively
                  sometimes instaed of @ you can use v-on
                  and instead of : you can use v-bind   



                vi) if you want to execute for loop on element, you can use v-for="statement"
                for example if you have an array like this in data(){ fruits: ["apple", "mango", "orange " .. ]}

                you can use it like this in html <span v-for="fruit in fruits"> {{fruit}}</span>
                <span> will be executed n times and prints name of the value in the array, where  n is the length of array
                similarily you can use v-for in any tag like <h3 v-for="fruit in fruits">{{fruit}}</h3>
                fruits is the name of array, and fruit is the name of single entity of array, it can be named anything as long as you are using same name to echo inside same tag like we are using {{fruit}}
                
                vi) and lastly if you want to show/hide any element based on condition, you can use v-if="someVariable", someVariable should return boolean, true of false, based on which it is decided wether element is visible or not 
                eg <span v-if="someVariable == 'apple'">  </span>, this span will only be displayed if someVariable value is apple



              Additional info... not necessary to understand

              viii) binding style and classes are little different  in vue
              normally in html style is like this style="padding: 0px; margin: 8px" but in vue if you want to make it dynamic, you have to use :style="{padding: '0px', margin: '8px'}"
              and normally in html class is like this class="class-name" but in vue if you want to make it dynamic, you have to use :class="{class-name: boolean}" if boolean is true, then only it is attached, otherwise dropped
              so style & class uses javascript object as argument not strings, with different syntax for both

     -->
    <div class="container-responsive">
      <!-- header starts -->

     
      <div class="row bg-success p-3">

        <div class="col-md-12">
         
          <h4 class="heading text-white">  <!-- thesec classes changes background of heading text "text-dark", "text-primary", "text-secondary"  etc... -->
            NAUTILUS FIOS Summary Utility
          </h4>

          <!-- button variant can be = "success" ->(green), "danger"-> (red) -->
          <b-button
            variant="danger" 
            class="b-button"
            v-b-modal.new-swap-shift-modal
            >Word List</b-button
          >
        </div>
      </div>

      <!-- header ends -->

      <div class="row m-3">
        <div class="col-md-12">


          <!-- <div
            id="drop"
            @click="performClick"
            @drop="handleDrop"
            @dragover="handleDragover"
            @dragenter="handleDragover"
          >
            Drop Here
          </div> -->

          <div class="form-group">
            <label for="excelFileInput">Select Excel File</label>

          
            <input
              type="file"
              ref="file"
              class="form-control-file"
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              id="excelFileInput"
              @change="handleInputFile"/>   <!-- @change executes handleInputFile() method in scrpits methods section -->

          </div>
        </div>
      </div>
      <div class="row" v-if="isActiveFile"> <!-- here I have used v-if to bind it to isActiveFile variable,  isActiveFile tracks if file is active or not, which simple shows or hides this element which is the table element container !-->
        <div class="col-md-12">
          <table
            class="table table-striped table-hover table-condensed table-responsive"
          >
            <thead>
              <tr>
                <th v-for="(header, index) in headers" :key="index">   <!-- Here I am using v-for loop to generate <th> </th> element ("table head element") n number of times, where n is the length of the headers array, I am storing the column names inside headers array, so this tag displays that at top of table using table head tag, you can also ignore :key everywhere in v-for loop tag because, its just a small convention !-->
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in tickets" :key="index"> <!-- here I am looping through the tickets array, which is array of rows of excel file,  so it generates tr (table row) element n no of times  !-->


                <td v-for="(cell, index) in row" :key="index" :style="{ width: getColumnWidth(cell) }" >   <!--Inside each table row (tr), we have to display table cell denoted by td (table data), in html.. so we loop through row, which is extracted in turn from parent loop tickets....  each row has cell which contains data...   !-->

                  <label v-html="parseKey(cell)"> </label>  <!-- This just displays the cell content, but the reason i am using parseKey method is because, I want to highlight some words in it, so parseKey method modifies the cell variable, replaces all matching words in it with backrground color of what is defined in color.hex variable indside data in scripts !-->


                  <p>{{ row.key }}</p> <!--  Ignore it , it displays nothing!-->


                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>

<!-- this is the component for the buttons that you see on bottom left, toggle buttons -->
<!-- start -->
      <ToggleButtons
        :activeGroup="activeGroup"
        class="sticky"
        @group="changeToggleActiveGroup"
        :key="toggleButtonComponentKey"/>
        <!-- end -->



    </div>


<!-- this is the popup modal code  (tag named "b-modal"), it starts from here -->
<!-- when you click on the word list, the popup that comes, is the one because of this code  -->
    <b-modal
      id="new-swap-shift-modal"
      title="Word List"
      @click="colorPickerActive = false">
      <div class="d-block text-center" @click="colorPickerActive = false">
        <div class="row" @click="colorPickerActive = false">
          <div class="col">
            Highlited Text Color
          </div>
          <div class="col">
            <span
              class="picked-color"
              :style="{ backgroundColor: color.hex }"
              @click="
                $event.preventDefault();
                $event.stopPropagation();
                colorPickerActive = !colorPickerActive;
              "
            ></span>
            <Sketch
              v-model="color"
              :presetColors="presetColors"
              v-show="colorPickerActive"
            />
          </div>
        </div>

        <div class="container mt-4" @click="colorPickerActive = false">
          <p>Add the words that you want to highlight</p>

          <ToggleButtons
            :activeGroup="activeGroup"
            @group="changeToggleActiveGroup"
          />

          <div
            class="form-row mt-1"
            v-for="(word, index) in highlightedWords[activeGroup]"
            :key="index"
          >
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter word"
                v-model.lazy="highlightedWords[activeGroup][index]"
              />

              <div class="input-group-append">
                <button
                  class="btn btn-sm btn-danger"
                  type="button"
                  @click="removeItem(index)"
                >
                  &times;
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="btn btn-primary btn-block mt-2"
            @click="highlightedWords.push('')"
          >
            Add more
          </button>
        </div>
      </div>
    </b-modal>

    <!-- modal ends here -->
  </div>
</template>

<script>
import XLSX from "xlsx";
import { BModal } from "bootstrap-vue";
import { Sketch } from "vue-color";

import ToggleButtons from "./components/ToggleButtons";
export default {
  components: {
    BModal,
    Sketch,
    ToggleButtons
  },
  data() {
    return {
      tickets: [{ name: "" }],
      headers: [""],
      color: { hex: "#00ff00" },
      colorPickerActive: false,
      presetColors: [
        "#FFFF00",
        "#00ff00",
        "#00ff0055",
        "rgb(201, 76, 76)",
        "rgba(0,0,255,1)",
        "hsl(89, 43%, 51%)",
        "hsla(89, 43%, 51%, 0.6)"
      ],
      activeGroup: "group1",
      highlightedWords: {
        group1: [
          "box",
          "cable",
          "wifi",
          "channel",
          "internet",
          "test",
          "fios",
          "email",
          "phone",
          "line",
          "router",
          "adapter",
          "disconnect",
          "speed",
          "account",
          "pixel",
          "signal",
          "tv",
          "network",
          "connect",
          "flash",
          "computer",
          "laptop",
          "ipad",
          "wire",
          "ticket",
          "service",
          "power",
          "supply",
          "battery",
          "television",
          "hate",
          "streaming",
          "watch",
          "triple play",
          "package",
          "hbo"
        ],
        group2: [
          "order",
          "purchase",
          "discount",
          "free",
          "credit",
          "call back",
          "setting",
          "schedule",
          "installation",
          "technician",
          "reset",
          "ship",
          "on hold"
        ],
        group3: [
          "bullshit",
          "issue",
          "problem",
          "frustrat",
          "wors",
          "unfortunate",
          "discontinue",
          "want"
        ],
        all: [
          "box",
          "cable",
          "wifi",
          "channel",
          "internet",
          "test",
          "fios",
          "email",
          "phone",
          "line",
          "router",
          "adapter",
          "disconnect",
          "speed",
          "account",
          "pixel",
          "signal",
          "tv",
          "network",
          "connect",
          "flash",
          "computer",
          "laptop",
          "ipad",
          "wire",
          "ticket",
          "service",
          "power",
          "supply",
          "battery",
          "television",
          "hate",
          "streaming",
          "watch",
          "triple play",
          "package",
          "hbo",
          "order",
          "purchase",
          "discount",
          "free",
          "credit",
          "call back",
          "setting",
          "schedule",
          "installation",
          "technician",
          "reset",
          "ship",
          "on hold",
          "bullshit",
          "issue",
          "problem",
          "frustrat",
          "wors",
          "unfortunate",
          "discontinue",
          "want"
        ]
      },
      isActiveFile: false,
      toggleButtonComponentKey: 9868
    };
  },
  methods: {
    parseKey(cell) {
      let modifiedCell = cell.toString();

      this.highlightedWords[this.activeGroup].forEach(word => {
        if (word != "" && word.length > 0) {
          if (modifiedCell.search(word) != -1) {
            let modifiedWord = `<span class="highlighted-text" style="background-color: ${this.color.hex}">${word}</span>`;
            modifiedCell = this.replaceAll(modifiedCell, word, modifiedWord);
          }
        }
      });

      return modifiedCell;
    },
    get_header_row(sheet) {
      var headers = [],
        range = XLSX.utils.decode_range(sheet["!ref"]);
      var C,
        R = range.s.r; /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        var cell =
          sheet[
            XLSX.utils.encode_cell({ c: C, r: R })
          ]; /* find the cell in the first row */
        var hdr = "UNKNOWN " + C; // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
        headers.push(hdr);
      }
      return headers;
    },
    fixdata(data) {
      var o = "",
        l = 0,
        w = 10240;
      for (; l < data.byteLength / w; ++l)
        o += String.fromCharCode.apply(
          null,
          new Uint8Array(data.slice(l * w, l * w + w))
        );
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
      return o;
    },
    workbook_to_json(workbook) {
      var result = {};
      workbook.SheetNames.forEach(function(sheetName) {
        var roa = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheetName]
        );
        if (roa.length > 0) {
          result[sheetName] = roa;
        }
      });
      return result;
    },
    handleDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      console.log("DROPPED");
      var file = e.dataTransfer.files[0];
      this.handleFile(file);
    },
    handleInputFile(e) {
      e.stopPropagation();
      e.preventDefault();

      var file = e.target.files[0];

      this.handleFile(file);
    },
    handleDragover(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    },
    handleFile(file) {
      this.isActiveFile = true;
      var reader = new FileReader(),
        name = file.name;
      reader.onload = e => {
        var state = this;
        var results,
          data = e.target.result,
          fixedData = this.fixdata(data),
          workbook = XLSX.read(btoa(fixedData), { type: "base64" }),
          firstSheetName = workbook.SheetNames[0],
          worksheet = workbook.Sheets[firstSheetName];
        state.headers = this.get_header_row(worksheet);
        results = XLSX.utils.sheet_to_json(worksheet);
        state.tickets = results;
      };
      reader.readAsArrayBuffer(file);
    },
    performClick() {
      var elem = this.$refs.file;
      if (elem && document.createEvent) {
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, false);
        elem.dispatchEvent(evt);
      }
    },
    replaceAll(str, find, replace) {
      return str.toString().replace(new RegExp(find, "g"), replace);
    },
    getColumnWidth(text) {
      if (text.length > 10) {
        return "590px";
      } else {
        return "100px";
      }
    },
    removeItem(index) {
      this.highlightedWords.splice(index, 1);
    },
    changeToggleActiveGroup(activeGroup) {
      this.activeGroup = activeGroup;
      this.forceRerender();
    },
    forceRerender() {
      this.toggleButtonComponentKey += 1;
    }
  }
};
</script>

<style lang="scss">
#drop {
  border: 2px dashed #bbb;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  padding: 25px;
  text-align: center;
  font: 20pt bold, "Vollkorn";
  color: #bbb;
}
.heading {
  display: inline-block;
}
.b-button {
  float: right;
}
.picked-color {
  display: inline-block;
  width: 30px;
  height: 30px;
}
.vc-sketch {
  position: absolute !important;
  z-index: 9999;
}
.highlighted-text {
  padding: 0px;
}
.sticky {
  position: fixed !important;
  right: 20px;
  bottom: 0px;
}
</style>
