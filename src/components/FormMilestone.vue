<template>
  <div
    id="form_milestone_holder"
    class="form_milestone_holder round-corner"
    style="visibility: visible; width: 100vw"
  >
    <div class="form_milestone_holder_wrap_outer shadow round-corner" style="width: 100vw">
      <div class="form_milestone_holder_wrap_inner">
        <ul class="form_milestone_view" style="width: 100vw; display: flex">
          <li class="form_milestone_step green first" style="flex-grow: 26; padding-left: 10px">
            <div class="floater green singleLine"></div>
            <div class="content">
              <div class="content_name">填写申请</div>
            </div>
          </li>
          <li class="form_milestone_step_arrow_li green">
            <div class="form_milestone_step_arrow_wrap">
              <div class="form_milestone_step_arrow green"></div>
              <div class="form_milestone_step_arrow white"></div>
            </div>
          </li>
          <li class="form_milestone_step green" style="flex-grow: 30">
            <div class="floater green singleLine"></div>
            <div class="content">
              <div class="content_name">辅导员审核</div>
            </div>
          </li>
          <li class="form_milestone_step_arrow_li green">
            <div class="form_milestone_step_arrow_wrap">
              <div class="form_milestone_step_arrow green"></div>
              <div class="form_milestone_step_arrow white"></div>
            </div>
          </li>
          <li class="form_milestone_step green last" style="flex-grow: 30">
            <div class="floater green singleLine"></div>
            <div class="content">
              <div class="content_name">完成（审核通过）</div>
            </div>
          </li>
        </ul>
        <div class="clear" style="height: 10px"></div>
      </div>
    </div>
  </div>
</template>
