<template>
  <div>
    <div class="mod_mv">
      <div class="section_inner">
        <div class="mv__player" id="mvplayer">
          <div id="js_qmvedio_1" class="video_player_box" style="width: 1200px; height: 674px;">
            <!--引用的图标SVG S-->
            <svg style="display:none" xmlns="http://www.w3.org/2000/svg">
              <defs>

                <symbol id="video_player_max" viewBox="0 0 30 30">
                  <title>全屏</title>
                  <path
                    d="M23 25h-4v-2h2.63l-5.753-5.658 1.354-1.331 5.769 5.674v-2.685h2v6h-2zm0-15.669l-5.658 5.658-1.331-1.331 5.658-5.658h-2.669v-2h6v6h-2v-2.669zm-15.027 15.669h4.027v-2h-2.676l5.676-5.658-1.335-1.331-5.692 5.674v-2.685h-1.973v6h1.973zm0-15.669l5.581 5.658 1.313-1.331-5.582-5.658h2.715v-2h-6v6h1.973v-2.669z">
                  </path>
                </symbol>

                <symbol id="video_player_normal" viewBox="0 0 30 30">
                  <title>取消全屏</title>
                  <path
                    d="M22 12v2h-6v-6h2v2.669l5.658-5.658 1.331 1.331-5.658 5.658h2.669zm-10 7.331l-5.658 5.658-1.331-1.331 5.658-5.658h-2.669v-2h6v6h-2v-2.669zm-4-7.331h2.669l-5.658-5.658 1.331-1.331 5.658 5.658v-2.669h2v6h-6v-2zm14 6h-2.669l5.658 5.658-1.331 1.331-5.658-5.658v2.669h-2v-6h6v2z">
                  </path>
                </symbol>

                <symbol id="video_player_next" viewBox="0 0 30 30">
                  <title>下一首MV</title>
                  <path
                    d="M19.568 14l-12.277-7.912c-1.173-.467-1.3.885-1.3 1.993v14.694c-.116 1.137.416 1.546 1.3.963l12.277-8.275a1.043 1.043 0 0 0 .432-.732 1.043 1.043 0 0 0-.432-.731zm2.432-8h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1z">
                  </path>
                </symbol>

                <symbol id="qmv_icon_repeat_mv" viewBox="0 0 70 70">
                  <title>重复播放当前MV</title>
                  <path
                    d="M56.939 38.6c-.816 10.851-9.879 19.4-20.939 19.4-11.598 0-21-9.402-21-21s9.402-21 21-21c7.137 0 13.441 3.56 17.236 9h-8.234c-2.508-1.884-5.625-3-9.002-3-8.284 0-15 6.716-15 15s6.716 15 15 15c7.948 0 14.453-6.182 14.967-14h.033c0-1.656 1.344-3 3-3s3 1.344 3 3c0 .205-.021.406-.061.6zm-5.439-24.6c1.381 0 2.5 1.119 2.5 2.5v11c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5v-11c0-1.381 1.119-2.5 2.5-2.5zm-10 11h10c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5h-10c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5z">
                  </path>
                </symbol>

                <symbol id="video_player_play" viewBox="0 0 30 30">
                  <title>播放</title>
                  <path
                    d="M22.568 14l-12.277-7.912c-1.173-.468-1.3.885-1.3 1.993v14.694c-.116 1.137.416 1.546 1.3.963l12.277-8.275a1.044 1.044 0 0 0 .432-.732 1.043 1.043 0 0 0-.432-.731z">
                  </path>
                </symbol>

                <symbol id="qmv_icon_round" viewBox="0 0 56 56">
                  <title>圆</title>
                  <path
                    d="M28,1c14.912,0,27,12.088,27,27c0,14.911-12.088,27-27,27 S1,42.911,1,28C1,13.088,13.088,1,28,1z">
                  </path>
                </symbol>

                <symbol id="video_player_pause" viewBox="0 0 30 30">
                  <title>暂停</title>
                  <path
                    d="M19 6h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1zm-10 0h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1z">
                  </path>
                </symbol>

                <symbol id="video_player_arrow" viewBox="0 0 18 8">
                  <title>箭头</title>
                  <path d="M0.500,-0.000 L8.500,8.000 L17.500,-0.000"></path>
                </symbol>

                <symbol id="video_player_loading" viewBox="0 0 110 110">
                  <title>loading</title>
                  <path
                    d="M60.06 97.9c-10.9 3.377-22.218-1.219-25.286-10.264s3.279-19.115 14.177-22.492a23.728 23.728 0 0 1 13.214-.318l-24.065-33.226a3.053 3.053 0 0 1-.322-2.05c1.516-8.335 15.833-11.13 15.833-11.13 14.412-2.02 16.482-7.42 16.482-7.42 4.515 14.346-5.172 20.056-5.172 20.056-5.372 4.396-14.546 3.644-14.546 3.644l22.814 38.016-.3-.192a14.766 14.766 0 0 1 1.345 2.882c3.066 9.045-3.277 19.115-14.174 22.494z">
                  </path>
                </symbol>

                <symbol id="video_player_voice" viewBox="0 0 30 30">
                  <title>音量</title>
                  <path
                    d="M3 11a.842.842 0 0 1 1-1h4l5.859-4.2s2.119-1.716 2.141.2v18s-.021 1.6-1.619.7l-6.381-4.7h-4a.888.888 0 0 1-1-1v-8zm17.328-1.821a1.07 1.07 0 0 0-1.446 0 .917.917 0 0 0 0 1.357 6.056 6.056 0 0 1 0 8.939.923.923 0 0 0 0 1.362 1.072 1.072 0 0 0 1.446 0 7.9 7.9 0 0 0 0-11.658zm2.772-3.025a1.074 1.074 0 0 0-1.453 0 .927.927 0 0 0 0 1.36 10.175 10.175 0 0 1 0 15.028.924.924 0 0 0 0 1.36 1.082 1.082 0 0 0 1.453 0 12.027 12.027 0 0 0 0-17.748z">
                  </path>
                </symbol>

                <symbol id="video_player_voice_none" viewBox="0 0 30 30">
                  <title>静音</title>
                  <path
                    d="M3 11a.842.842 0 0 1 1-1h4l5.859-4.2s2.119-1.716 2.141.2v18s-.021 1.6-1.619.7l-6.381-4.7h-4a.888.888 0 0 1-1-1v-8z">
                  </path>
                  <path
                    d="M28.995 18.558l-1.387 1.455-3.608-3.594-3.608 3.595-1.387-1.455 3.571-3.559-3.571-3.558 1.387-1.455 3.608 3.594 3.608-3.595 1.387 1.455-3.571 3.559z">
                  </path>
                </symbol>

                <symbol id="video_player_random" viewBox="0 0 30 30">
                  <title>随机播放</title>
                  <path
                    d="M28 11l-2.516.007-.027-.028-4.457-.004v.025a4.671 4.671 0 0 0-3.885 1.605l-1.539 2.428.015.023-1.135 1.8-.019-.029-1.679 2.653a5.358 5.358 0 0 1-4.758 2.52h-6v-2h6a4.377 4.377 0 0 0 3.561-2.293l1.72-2.674-.007-.011 1.149-1.809.015.023 1.174-1.826s1.278-2.41 5.388-2.41v.011h2.559l-2.552-2.648 1.47-1.353 5.12 5.553.403.422h-.014zm-16.439 1.359a4.381 4.381 0 0 0-3.561-2.359h-6v-2h6a5.5 5.5 0 0 1 4.758 2.586l.424.669-1.211 1.745zm5.284 4.676l.27.426a4.523 4.523 0 0 0 3.885 1.539v1.893l.008-1.9 6.992.007-.011.011h.011l-5.518 5.989-1.476-1.354 2.6-2.684-2.606.038c-3.351 0-4.8-1.541-5.23-2.116z">
                  </path>
                </symbol>
                <symbol id="video_player_list" viewBox="0 0 30 30">
                  <title>循环播放</title>
                  <path
                    d="M19.358 23.015h-1.878l1.52 1.585-1.47 1.386-2.713-2.971h-.017l-1.83-2.025h6.5a5.495 5.495 0 1 0 0-10.989h-.85l.032-.029-1.763-1.978h2.469a7.511 7.511 0 1 1 0 15.021zm-8.858-13.015a5.489 5.489 0 0 0-.12 10.977l1.757 2.037h-1.52a7.511 7.511 0 1 1 0-15.021h.872l-1.656-1.806 1.585-1.251 2.405 2.638-.023.026 2.244 2.4h-5.544z">
                  </path>
                </symbol>

                <symbol id="video_player_normal" viewBox="0 0 30 30">
                  <title>取消全屏</title>
                  <path
                    d="M22 12v2h-6v-6h2v2.669l5.658-5.658 1.331 1.331-5.658 5.658h2.669zm-10 7.331l-5.658 5.658-1.331-1.331 5.658-5.658h-2.669v-2h6v6h-2v-2.669zm-4-7.331h2.669l-5.658-5.658 1.331-1.331 5.658 5.658v-2.669h2v6h-6v-2zm14 6h-2.669l5.658 5.658-1.331 1.331-5.658-5.658v2.669h-2v-6h6v2z">
                  </path>
                </symbol>

              </defs>
            </svg>

            <div class="js_qv_showctrl video_player">
              <video id="video_player__source" class="video_player__source" width="1200" height="674"
                webkit-playsinline="true" isiphoneshowplaysinline="true" playsinline="true" preload="metadata"
                autoplay="autoplay" :src="mvUrl"></video>

              <!-- 封面 -->
              <!-- <div class="video_player_cover js_qv_poster qv_hide">
                <div class="video_player_cover__cont">
                  <img alt=""
                       style="width: auto;height: 100%;margin: auto;"
                       class="video_player_cover__pic">
                </div>
              </div> -->

              <!-- 遮罩 -->
              <!-- <div class="video_player_mask js_qv_mask qv_hide"></div> -->

              <!-- 接下来播放 -->
              <div class="video_player_next js_qv_btn js_qv_next_to_play qv_hide" style="display:none">
                <div class="video_player_next__cont">
                  <div class="video_player_next__hd">
                    <p>接下来放</p>
                    <p class="js_qv_next_name">****</p>
                  </div>

                  <div class="video_player_progress">
                    <a href="javascript:;" title="播放" class="video_player_progress__btn js_qv_next">
                      <span class="icon_txt">播放</span>
                      <svg class="video_player_progress__icon">
                        <use xlink:href="#video_player_play"></use>
                      </svg>
                    </a>
                    <div class="video_player_progress__left">
                      <div class="video_player_progress__inner"></div>
                    </div>
                    <div class="video_player_progress__right">
                      <div class="video_player_progress__inner"></div>
                    </div>
                  </div>
                  <a href="javascript:;" class="video_player_next__btn js_qv_next_cancel">取消</a>
                </div>
              </div>

              <!-- 当前播放时间 -->
              <!-- <div class="video_player_loading js_qv_btn js_qv_loading  qv_hide"
                   style="display:">
                <div class="video_player_loading__cont">
                  <div class="video_player_progress load">
                    <div class="video_player_progress__left">
                      <div class="video_player_progress__inner"></div>
                    </div>
                    <div class="video_player_progress__right">
                      <div class="video_player_progress__inner"></div>
                    </div>
                  </div>
                  <svg class="video_player_loading__logo">
                    <use xlink:href="#video_player_loading"></use>
                  </svg>
                </div>
              </div> -->

              <div class="video_player_tool js_qv_ctrl">
                <!-- 进度 -->
                <div class="video_player_tool__state js_qv_ctrl_bar" @click="setProgress($event)">
                  <div class="video_player_tool__state_bg"></div>
                  <div class="video_player_tool__state_load js_qv_buffer_bar" :style="{width: currentPer + '%'}"></div>
                  <div class="video_player_tool__state_progress js_qv_played_bar" :style="{width: currentPer + '%'}">
                    <div class="video_player_tool__state_progress_bg"></div>
                    <a href="javascript:;" class="video_player_tool__state_btn js_qv_time_cursor" style="z-index:4;">
                      <span class="icon_txt">进度按钮</span>
                    </a>
                  </div>
                </div>

                <!-- hover 进度条 显示时间浮层 -->
                <div class="video_popup_tips video_popup_time js_qv_ctrl_hover_time qv_hide"
                  style="left:0%;display: none">
                  <div class="video_popup_tips__cont">
                    --:--
                  </div>
                  <svg class="video_popup_tips__arrow middle">
                    <use xlink:href="#video_player_arrow"></use>
                  </svg>
                </div>

                <!-- 操作 播放 play 暂停 pause -->
                <a href="javascript:;" title="暂停" class="video_player__btn js_qv_ctrl_play play" @click="playAndpause()"
                  style="display:">
                  <span class="icon_txt">暂停</span>
                  <svg class="video_player__icon">

                    <!-- 播放 用video_player_play这个id 暂停 用video_player_pause 这个id -->
                    <use xlink:href="#video_player_pause" v-if="isPlay"></use>
                    <use xlink:href="#video_player_play" v-else></use>

                  </svg>
                </a>

                <!-- 操作 下一首 -->
                <!-- <a href="javascript:;"
                   title="下一首"
                   class="video_player__btn next js_qv_ctrl_next qv_hide">
                  <span class="icon_txt">下一首</span>
                  <svg class="video_player__icon">
                    <use xlink:href="#video_player_next"></use>
                  </svg>
                </a> -->

                <!-- hover 下一首 显示浮层 -->
                <!-- <div class="video_popup_tips video_popup_next js_qv_ctrl_next_hover qv_hide">
                  <div class="video_popup_tips__cont">
                    <img src="https://shp.qpic.cn/qqvideo_ori/0/b00255vuigr_360_204/0"
                         alt=""
                         class="video_popup_next__pic">
                    <div class="video_popup_next__cont">
                      <div class="video_popup_next__tit">下一首播放</div>
                      <div class="video_popup_next__info js_mv_name"></div>
                      <div class="video_popup_next__info js_mv_singer"></div>
                    </div>
                  </div>
                  <svg class="video_popup_tips__arrow">
                    <use xlink:href="#video_player_arrow"></use>
                  </svg>
                </div> -->

                <!-- 时长 -->
                <div class="video_player_time  js_qv_ctrl_time">
                  <span class="js_qv_time_current">{{currentTime}}</span>/
                  <span class="js_qv_time_total">{{duration}}</span>
                </div>

                <!-- 操作 音量 选中 加current -->
                <a href="javascript:;" title="音量" @click="volume_change = !volume_change"
                  class="video_player__btn voice js_qv_ctrl_voice">
                  <span class="icon_txt">音量</span>
                  <svg class="video_player__icon middle">
                    <use xlink:href="#video_player_voice"></use>
                  </svg>
                </a>

                <!-- 点击 音量 显示音量浮层 -->
                <div class="video_popup_tips video_popup_voice js_qv_volume_change qv_hide" v-if="volume_change">
                  <div class="video_popup_tips__cont">
                    <div class="video_popup_voice__box js_qv_volume_change_line" id="spanvolume">
                      <div class="video_popup_voice__state js_volume_state" :style="{height: volumeCurrentPer + '%'}" id="spanvolumebar">
                        <a href="javascript:;" class="video_popup_voice__btn js_volume_btn" @mousedown.stop.prevent='onmousedown($event)' id="spanvolumeop">
                        </a>
                      </div>
                    </div>
                  </div>
                  <svg class="video_popup_tips__arrow middle">
                    <use xlink:href="#video_player_arrow"></use>
                  </svg>
                </div>

                <!-- 操作 播放模式 点击切换 -->
                <a href="javascript:;" title="循环播放" @click="playerloop"
                  class="video_player__btn style js_qv_ctrl_play_mode">
                  <span class="icon_txt">循环播放</span>
                  <svg class="video_player__icon">
                    <!--播放模式 循环播放 id video_player_list 随机播放 id video_player_random -->
                    <use xlink:href="#video_player_list"></use>
                  </svg>
                  <span class="video_player__icon_one js_qv_ctrl_play_mode_one" v-if="MediaLoop"
                    :class="{'qv_hide': !MediaLoop}"></span>
                </a>

                <!-- 操作 品质 选中 加current -->
                <a href="javascript:;" @click="video_popup_quility = !video_popup_quility"
                  class="video_player__btn quility js_qv_ctrl_play_quility">{{videoQuility}}</a>
                <!-- 点击 品质 显示品质浮层 -->
                <div class="video_popup_tips video_popup_quility js_qv_ctrl_play_quility_detail"
                  v-if="video_popup_quility">
                  <div class="video_popup_tips__cont">
                    <!-- <a href="javascript:;"
                       class="video_popup_quility__item js_quility_item current qv_hide"
                       data-type="40">全高清1080P</a> -->
                    <a href="javascript:;" v-for="(item, index) in video_popup_quility_List" :key="index"
                      class="video_popup_quility__item js_quility_item" :class="{'current': currentIdx === index}"
                      @click="changeQuility(item, index)" data-type="30">{{item.name}}</a>

                  </div>
                  <svg class="video_popup_tips__arrow middle">
                    <use xlink:href="#video_player_arrow"></use>
                  </svg>
                </div>

                <!-- 操作 全屏 -->
                <a href="javascript:;" title="全屏" @click="video_FullScreen()"
                  class="video_player__btn max js_qv_fullscreen">
                  <span class="icon_txt">全屏</span>
                  <svg class="video_player__icon">
                    <!-- 操作 全屏 id video_player_max 取消全屏 id video_player_normal-->
                    <use xlink:href="#video_player_normal" v-if="isFullScreen"></use>
                    <use xlink:href="#video_player_max" v-else></use>
                  </svg>
                </a>

              </div>

              <!-- 视频播放出错 -->
              <div class="video_player_warn js_qv_btn js_qv_error qv_hide" style="display: none">
                <div class="video_player_warn__cont">
                  <p class="js_error_message">当前视频暂时无法播放，请稍后再试</p>
                  <p><a href="javascript:;" class="js_qv_refresh">重试</a></p>
                </div>
              </div>

              <!-- 小屏模式 -->
              <div class="video_player_min" style="display: none">
                <!-- 移动窗口 -->
                <div class="video_player_min__top">
                  <div class="video_player_min__top_icon"></div>
                </div>
                <!-- 点击视频触发 -->
                <div class="video_player_min__action">
                  <a href="javascript:;" title="播放" class="video_player_min__btn">
                    <span class="icon_txt">播放</span>
                    <svg class="video_player_min__icon">
                      <use xlink:href="#qmv_player_play"></use>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="mv__info" id="mv_control" style="">
          <h1 class="mv__title"><span class="mv__name" :title="mvInfo.info.name">{{mvInfo.info.name}}</span>

            <span class="mv__line">-</span>

            <nuxt-link :to="'/singerDetail/' + mvInfo.info.singers[0].mid"
              onclick="setStatCookie&amp;&amp;setStatCookie();" class="mv__singer js_singer"
              data-stat="y_new.mv.singername" :data-singermid="mvInfo.info.singers[0].mid">
              {{mvInfo.info.singers[0].name}}</nuxt-link>

          </h1>

          <span class="mv__listen">播放量：{{mvInfo.info.playcnt | playVolume}}</span>

          <div class="mv_toolbar">
            <a href="javascript:;" class="mv_toolbar__item mv_toolbar__phone js_mv_code"
              data-target="popup_phone_qrcode"><i class="mv_toolbar__icon_phone sprite"></i>在手机上播</a>
            <i class="mv_toolbar__line"></i>
            <a href="javascript:;" class="mv_toolbar__item mv_toolbar__inform js_accusation" data-type="8"
              data-id="w0026q7f01a">举报</a>
            <i class="mv_toolbar__line"></i>
            <a class="mod_btn_comment js_into_comment btn_comment99" data-stat="y_new.mv.gotocomment"
              href="#comment_box"><span class="btn_comment__numbers"><i
                  class="btn_comment__numb btn_comment__numb_9"></i><i
                  class="btn_comment__numb btn_comment__numb_9"></i><i
                  class="btn_comment__numb btn_comment__numb_9"></i><i
                  class="btn_comment__numb btn_comment__numb_add"></i></span><span class="icon_txt">评论</span></a>

            <i class="mv_toolbar__line"></i>
            <a href="javascript:;" class="mv_toolbar__item mv_toolbar__share sprite js_mv_share"><i
                class="icon_txt">分享</i></a>

            <i class="mv_toolbar__line"></i>
            <a href="javascript:;" class="mv_toolbar__item mv_toolbar__like sprite js_mv_fav"><i
                class="icon_txt">收藏</i></a>

          </div>
        </div>

        <!-- 浮层 -->
        <div class="popup_phone_qrcode" id="popup_phone_qrcode" data-aria="popup"
          style="bottom:-148px;right:240px;display:none;">
          <i class="popup_phone_qrcode__arrow"></i>
          <img src="//i.gtimg.cn/mediastyle/musicprotal/img/qrcode_qqmusic.jpg" class="popup_phone_qrcode__pic">
        </div>
      </div>
    </div>
    <div class="main-content">

      <div class="mv_others" id="mv_list" style="">
        <h2 class="mv_others__tit">大部分人还爱看</h2>
        <div class="mod_slider ">

          <a href="javascript:;" class="slider__prev js_jump" data-p="prev"><i class="icon_txt">上一页</i></a>
          <a href="javascript:;" class="slider__next js_jump" data-p="next"><i class="icon_txt">下一页</i></a>

          <div class="mod_mv_list">
            <ul class="mv_list__list" style="left: -200%;">

              <li class="mv_list__item" v-for="(item, index) in mvInfo.recommend" :key="index">
                <div class="mv_list__item_box">
                  <nuxt-link :to="'/MVDetail/' + item.vid" onclick="setStatCookie&amp;&amp;setStatCookie();"
                    class="mv_list__cover mod_cover" data-stat="y_new.mv.othercmv.play" :data-vid="item.vid"
                    hidefocus="true">
                    <img class="mv_list__pic" :src="item.cover_pic"
                      onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                      :alt="item.name">
                    <i class="mod_cover__icon_play"></i>
                  </nuxt-link>
                  <h3 class="mv_list__title">
                    <nuxt-link :to="'/MVDetail/' + item.vid" onclick="setStatCookie&amp;&amp;setStatCookie();"
                      data-stat="y_new.mv.othercmv.mvname" :data-vid="item.vid">{{item.name}}</nuxt-link>
                  </h3>
                  <p class="mv_list__singer">

                    <a href="//y.qq.com/portal/profile.html?uin=7eni7KviNv**" data-uin="7eni7KviNv**" class="js_profile"
                      :title="item.uploader_nick">上传者：{{item.uploader_nick}}</a>

                  </p>
                  <div class="mv_list__info"><span class="mv_list__listen"><i
                        class="mv_list__listen_icon sprite"></i>{{item.playcnt | playVolume}}</span>{{item.pubdate | formatTime}}
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <div class="mod_mv_info mv_mv_others" id="mv_info" style="">
        <h2 class="mv_others__tit">视频简介</h2>
        <div class="mv_info__about">

          <a href="https://y.qq.com/n/yqq/singer/0025NhlN2yWrP4.html#stat=y_new.mv.desc.singername"
            onclick="setStatCookie&amp;&amp;setStatCookie();" class="mv_info__name js_singer"
            data-stat="y_new.mv.desc.singername" data-singermid="0025NhlN2yWrP4">{{mvInfo.info.singers[0].name}}</a>

          <span class="mv_info__time">发行时间：<time>{{mvInfo.info.pubdate | formatTime}}</time></span></div>

        <div class="mv_info__cont">
          <p>{{mvInfo.info.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        mvInfo: {},
        mvUrl: '',
        isPlay: true,
        volume_change: false,
        MediaLoop: false,
        video_popup_quility: false,
        video_popup_quility_List: [{
            name: '超清720P',
            label: '超清',
            value: 2
          },
          {
            name: '高清480P',
            label: '高清',
            value: 1
          },
          {
            name: '标清360P',
            label: '标清',
            value: 0
          },
        ],
        currentIdx: 0,
        videoQuility: '超清',
        isFullScreen: false,
        currentTime: '00:00',
        duration: '',
        currentPer: 0,
        volumeCurrentPer: 50
      }
    },
    async asyncData({
      app,
      params
    }) {
      let mvInfo = {}
      let res = await app.$api.mvInfo(params.id)
      if (res.data.result === 100) {
        mvInfo = res.data.data
      }
      // mv url
      let mvUrl = ''
      let mvUrlList = []
      let resUrl = await app.$api.mvUrl(params.id)
      if (resUrl.data.result === 100) {
        mvUrlList = resUrl.data.data[params.id]
      }

      return {
        mvInfo,
        mvUrl: mvUrlList[mvUrlList.length - 1],
        mvUrlList
      }
    },
    mounted() {
      const _this = this
      const Media = document.getElementById("video_player__source");
      Media.addEventListener("canplaythrough", function () {
        console.log('视频加载完成22')
        _this.duration = _this.format(Media.duration)
        _this.duration2 = Media.duration
      });
      Media.addEventListener("timeupdate", function (event) {
        _this.currentTime = _this.format(Media.currentTime)
        // console.log('时间改变', Media.currentTime)
        // 进度条
        let currentTime2 = Media.currentTime
        let spanplayer_bgbar = document.querySelector('.js_qv_ctrl_bar')
        let spanplayer_bgbarWidth = spanplayer_bgbar.offsetWidth
        let percentage = spanplayer_bgbarWidth / _this.duration2
        let currentPer = currentTime2 * percentage
        _this.currentPer = (currentPer / spanplayer_bgbarWidth) * 100

      });
      Media.addEventListener("ended", function () {
        console.log('音频播放完成')
        _this.isPlay = true
        _this.currentTime = '00:00'
        _this.currentPer = 0
      });
    },
    methods: {
      format(value) { // 时间转换
        if (!value) return ''
        let interval = Math.floor(value)
        let minute = (Math.floor(interval / 60)).toString().padStart(2, '0')
        let second = (interval % 60).toString().padStart(2, '0')
        return `${minute}:${second}`
      },
      playAndpause() {
        let play = this.isPlay
        const Media = document.getElementById("video_player__source");
        if (play) {
          Media.pause(); //暂停
          play = false
        } else {
          Media.play() // 播放
          play = true
        }
        this.isPlay = play
      },
      playerloop() {
        const Media = document.getElementById("video_player__source")
        this.MediaLoop = !this.MediaLoop
        Media.loop = this.MediaLoop
      },
      changeQuility(item, index) {
        this.currentIdx = index
        this.videoQuility = item.label
        this.video_popup_quility = false
        this.mvUrl = this.mvUrlList[item.value]
      },
      video_FullScreen() {
        const Media = document.getElementById("video_player__source")
        if (this.isFullScreen) {
          this.exitFullscreen()
        } else {
          this.FullScreen(Media)
        }
        this.isFullScreen = !this.isFullScreen
      },
      FullScreen(element) {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullScreen();
        }
      },
      exitFullscreen() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExiFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      },
      setProgress(event) {
        const events = event || window.event;
        let offsetX = events.offsetX
        let spanplayer_bgbar = document.querySelector('.js_qv_ctrl_bar')
        let spanplayer_bgbarWidth = spanplayer_bgbar.offsetWidth
        let percentage = offsetX / spanplayer_bgbarWidth
        let currentTime = this.duration2 * percentage
        const Media = document.getElementById("video_player__source");
        Media.currentTime = currentTime
      },
      // 音量调节
      onmousedown(ev) {
        const Media = document.getElementById("video_player__source");
        var box = document.querySelector('#spanvolumeop')
        var bar = document.querySelector('#spanvolumebar')
        var all = document.querySelector('#spanvolume')
        // var p = document.getElementsByTagName('p')[0]
        var cha = all.offsetHeight - box.offsetHeight
        let boxL = bar.offsetHeight
        let e = ev || window.event //兼容性
        let mouseY = e.clientY //鼠标按下的位置
        const _this = this
        window.onmousemove = function (ev) {
          let e = ev || window.event
          let moveL = mouseY - e.clientY //鼠标移动的距离
          let newL = boxL + moveL //height值
          // 判断最大值和最小值
          if (newL < 0) {
            newL = 0
          }
          if (newL >= cha) {
            newL = cha
          }
          // bottom
          // box.style.top = newL + 'px'
          // 计算比例
          let bili = newL / cha * 100
          // p.innerHTML = '当前位置' + Math.ceil(bili) + '%'
          _this.volumeCurrentPer = Math.ceil(bili)
          Media.volume = newL / cha
          _this.MediaVolume = Media.volume
          return false //取消默认事件
        }
        window.onmouseup = function (ev) {
          let e = ev || window.event //兼容性
          window.onmousemove = false //解绑移动事件
          return false
        }
        return false
      },
    }
  }

</script>
<style lang="scss" scoped>
  @import "~/assets/scss/mv_detail.css";
  @import "~/assets/scss/video_player.css";
  @import "~/assets/scss/layout.css";

</style>
