import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import { useState } from "react";

function Todo(props) {
  const [currentItemType, setCurrentItemType] = useState(0);

  const [job, setJob] = useState("");
  function kaydet() {
    let a = job;
    props.kaydetCallBack(a, currentItemType);
    setJob("");
  }

  function todoItemTypeClick(type) {
    setCurrentItemType(type);
  }

  return (
    <>
      <div className="contaniner bodyBg">
        <div className="row justify-content-center d-flex p-5">
          <div className="col-md-8">
            <div className="input-group">
              <input
                onChange={(e) => setJob(e.target.value)}
                value={job}
                className="jobEnter form-control"
                type="text"
                placeholder="Yapılacak işi giriniz.."
                aria-label="Text input with segmented dropdown button"
              />
              <button
                type="button"
                className="btn btn-outline-secondary add jobEnter"
                onClick={kaydet}
              >
                Ekle
              </button>
            </div>
            <div className="radios d-flex justify-content-center mt-3">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  onClick={() => todoItemTypeClick(0)}
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option0"
                  checked={currentItemType == 0}
                />
                <label class="form-check-label" for="inlineRadio1">
                  Uzun Dönem
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  onClick={() => todoItemTypeClick(1)}
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Kritik
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  onClick={() => todoItemTypeClick(2)}
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Önemli
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  onClick={() => todoItemTypeClick(3)}
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label class="form-check-label" for="inlineRadio3">
                  Günlük
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
