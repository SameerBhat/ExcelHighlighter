<template>
  <div id="app">
    <div class="container-responsive">
      <!-- header starts -->

      <!-- bg-success -> green bg-primary -> blue { bg-secondar bg-dark bg-error} -->
      <div class="row bg-success p-3">
        <div class="col-md-12">
          <!-- text-dark, text-primary, secondary ... -->
          <h4 class="heading text-white">
            Excel Tool
          </h4>

          <!-- variant = success, danger -->
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

            <!-- @change exexute handleInputFile() -->
            <input
              type="file"
              ref="file"
              class="form-control-file"
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              id="excelFileInput"
              @change="handleInputFile"
            />
          </div>
        </div>
      </div>
      <div class="row" v-if="isActiveFile">
        <div class="col-md-12">
          <table
            class="table table-striped table-hover table-condensed table-responsive"
          >
            <thead>
              <tr>
                <th v-for="(item, index) in headers" :key="index">
                  {{ item }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tickets" :key="index">
                <td
                  v-for="(key, index) in item"
                  :key="index"
                  :style="{ width: getColumnWidth(key) }"
                >
                  <label v-html="parseKey(key)"> </label>
                  <p>{{ item.key }}</p>
                </td>
              </tr>
            </tbody>
            <tfoot>
             
            </tfoot>
          </table>
        </div>
      </div>


       <ToggleButtons
       :activeGroup="activeGroup"
       class="sticky"
       @group="changeToggleActiveGroup"
        :key="toggleButtonComponentKey"
       />
    </div>

    <b-modal
      id="new-swap-shift-modal"
      title="Word List"
      @click="colorPickerActive = false"
    >
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
            :key="index">
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
  </div>
</template>

<script>
import XLSX from "xlsx";
import { BModal } from "bootstrap-vue";
import { Sketch } from "vue-color";

import ToggleButtons from "./components/ToggleButtons"
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
    changeToggleActiveGroup(activeGroup){
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
