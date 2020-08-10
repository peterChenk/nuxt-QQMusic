<template>
  <div>
    <div class="main-content">

      <div class="mod_data"
           itemscope=""
           itemtype="http://schema.org/MusicRecording">
        <!-- 自建歌单用a标签 -->

        <span class="data__cover"
              id="logo">
          <img src="https://qpic.y.qq.com/music_cover/tJQS5alP1DichV9sM6pzVG0icyDlaP4ehxmOwXTqnBBhmJPX55lIHjlw/300?n=1"
               onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;"
               alt="港乐盛世，经典粤语歌典藏"
               class="data__photo">
        </span>
        <a href="javascript:;"
           class="data__cover js_edit"
           id="edit_logo"
           data-target="popup_upload_cover"
           onclick="resetImg();statistics.pgvClickStat('y_new.gedan.header.edit_logo');"
           style="display:none;">
          <img src="https://qpic.y.qq.com/music_cover/tJQS5alP1DichV9sM6pzVG0icyDlaP4ehxmOwXTqnBBhmJPX55lIHjlw/300?n=1"
               onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;"
               alt="港乐盛世，经典粤语歌典藏"
               class="data__photo">
          <i class="data__cover_edit sprite"></i>
        </a>
        <div class="data__cont">
          <div class="data__name js_box"
               data-type="p_title">
            <h1 class="data__name_txt"
                title="港乐盛世，经典粤语歌典藏"
                id="p_name_show">港乐盛世，经典粤语歌典藏</h1>
            <a href="javascript:;"
               class="btn_edit sprite js_edit"
               style="display:none;"><i class="icon_txt">编辑</i></a>
            <div class="mod_form_txt js_edit_box"
                 style="display:none;">
              <input type="text"
                     value="港乐盛世，经典粤语歌典藏"
                     class="form_txt__input"
                     id="p_name"><span class="form_txt__tips"
                    id="name_leftnum">0</span>
            </div>
          </div>
          <div class="data__singer">
            <i class="icon_singer sprite"></i><a href="javascript:;"
               title="我嘎乔安娜"
               class="data__singer_txt js_user"
               data-stat="y_new.gedan.header.nickname"
               itemprop="byArtist">我嘎乔安娜</a>
          </div>
          <ul class="data__info">
            <li class="data_info__item js_box"
                data-type="p_tags"
                style="display:;">
              <div class="data_tag_box">
                标签：<span id="choosebox1"><a href="javascript:;"
                     class="data_info__tags js_jump"
                     data-id="166">粤语</a><a href="javascript:;"
                     class="data_info__tags js_jump"
                     data-id="6">流行</a></span><a href="javascript:;"
                   class="btn_edit sprite js_edit"
                   style="display:none;"><i class="icon_txt">编辑</i></a>
              </div>
              <div class="data_tag_edit js_edit_box"
                   style="display:none;">
                <div class="mod_form_txt">
                  <div class="tag_edit_box"
                       id="choosebox2"><span class="tag_edit__tags">粤语<a href="javascript:;"
                         class="tag_edit__delete sprite js_del_tag"
                         data-tname="粤语"><i class="icon_txt">删除</i></a></span><span class="tag_edit__tags">流行<a href="javascript:;"
                         class="tag_edit__delete sprite js_del_tag"
                         data-tname="流行"><i class="icon_txt">删除</i></a></span></div>
                  <span class="form_txt__tips"
                        id="leaveNum">1</span>
                </div>
                <div class="tag_edit_select"
                     aria-label="标签选择框"
                     id="taglist">

                  <dl class="tag_edit_select__list">
                    <dt class="tag_edit_select__tit">语种</dt>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="165"
                         data-name="国语"
                         title="国语">国语</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="167"
                         data-name="英语"
                         title="英语">英语</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="168"
                         data-name="韩语"
                         title="韩语">韩语</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="166"
                         data-name="粤语"
                         title="粤语">粤语</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="169"
                         data-name="日语"
                         title="日语">日语</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="170"
                         data-name="小语种"
                         title="小语种">小语种</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="203"
                         data-name="闽南语"
                         title="闽南语">闽南语</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="204"
                         data-name="法语"
                         title="法语">法语</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="205"
                         data-name="拉丁语"
                         title="拉丁语">拉丁语</a></dd>

                  </dl>

                  <dl class="tag_edit_select__list">
                    <dt class="tag_edit_select__tit">流派</dt>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="6"
                         data-name="流行"
                         title="流行">流行</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="15"
                         data-name="轻音乐"
                         title="轻音乐">轻音乐</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="11"
                         data-name="摇滚"
                         title="摇滚">摇滚</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="28"
                         data-name="民谣"
                         title="民谣">民谣</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="8"
                         data-name="R&amp;B"
                         title="R&amp;B">R&amp;B</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="153"
                         data-name="嘻哈"
                         title="嘻哈">嘻哈</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="24"
                         data-name="电子"
                         title="电子">电子</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="27"
                         data-name="古典"
                         title="古典">古典</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="18"
                         data-name="乡村"
                         title="乡村">乡村</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="22"
                         data-name="蓝调"
                         title="蓝调">蓝调</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="21"
                         data-name="爵士"
                         title="爵士">爵士</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="164"
                         data-name="新世纪"
                         title="新世纪">新世纪</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="25"
                         data-name="拉丁"
                         title="拉丁">拉丁</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="218"
                         data-name="后摇"
                         title="后摇">后摇</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="219"
                         data-name="中国传统"
                         title="中国传统">中国传统</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="220"
                         data-name="世界音乐"
                         title="世界音乐">世界音乐</a></dd>

                  </dl>

                  <dl class="tag_edit_select__list">
                    <dt class="tag_edit_select__tit">心情</dt>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="52"
                         data-name="伤感"
                         title="伤感">伤感</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="122"
                         data-name="安静"
                         title="安静">安静</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="117"
                         data-name="快乐"
                         title="快乐">快乐</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="116"
                         data-name="治愈"
                         title="治愈">治愈</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="125"
                         data-name="励志"
                         title="励志">励志</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="59"
                         data-name="甜蜜"
                         title="甜蜜">甜蜜</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="55"
                         data-name="寂寞"
                         title="寂寞">寂寞</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="126"
                         data-name="宣泄"
                         title="宣泄">宣泄</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="68"
                         data-name="思念"
                         title="思念">思念</a></dd>

                  </dl>

                  <dl class="tag_edit_select__list">
                    <dt class="tag_edit_select__tit">场景</dt>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="78"
                         data-name="睡前"
                         title="睡前">睡前</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="102"
                         data-name="夜店"
                         title="夜店">夜店</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="101"
                         data-name="学习"
                         title="学习">学习</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="99"
                         data-name="运动"
                         title="运动">运动</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="85"
                         data-name="开车"
                         title="开车">开车</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="76"
                         data-name="约会"
                         title="约会">约会</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="94"
                         data-name="工作"
                         title="工作">工作</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="81"
                         data-name="旅行"
                         title="旅行">旅行</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="103"
                         data-name="派对"
                         title="派对">派对</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="222"
                         data-name="婚礼"
                         title="婚礼">婚礼</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="223"
                         data-name="咖啡馆"
                         title="咖啡馆">咖啡馆</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="224"
                         data-name="跳舞"
                         title="跳舞">跳舞</a></dd>

                    <dd class="tag_edit_select__item"><a href="javascript:;"
                         class="js_tag"
                         hidefocus="true"
                         data-id="16"
                         data-name="校园"
                         title="校园">校园</a></dd>

                  </dl>

                </div>
              </div>
            </li>
            <!--li class="data_info__item">创建时间：2017-06-30</li-->
            <li class="data_info__item">播放量：930.7万</li>
            <li class="data_info__item">收藏量：1.6万</li>
          </ul>

          <div class="data__actions"
               role="toolbar">
            <a href="javascript:;"
               class="mod_btn_green js_all_play"
               data-stat="y_new.gedan.header.playall"><i class="mod_btn_green__icon_play"></i>播放全部</a>
            <a href="javascript:;"
               class="mod_btn js_fav_taoge"
               data-stat="y_new.gedan.header.love"
               data-status="0"><i class="mod_btn__icon_like"></i>收藏</a>
            <a class="mod_btn js_into_comment"
               data-stat="y_new.gedan.gotocomment"
               href="#comment_box"><i class="mod_btn__icon_comment"></i>评论(51)</a>
            <a href="javascript:;"
               class="mod_btn js_more"
               data-stat="y_new.gedan.header.more"
               data-id="2670809622"><i class="mod_btn__icon_menu"></i>更多</a>
          </div>
        </div>
      </div>

      <div class="detail_layout">
        <div class="detail_layout__main js_main">

          <div class="mod_songlist">
            <ul class="songlist__header">
              <li class="songlist__edit songlist__edit--check sprite">
                <input type="checkbox"
                       class="songlist__checkbox js_check_all">
              </li>
              <li class="songlist__header_name">歌曲</li>
              <li class="songlist__header_author">歌手</li>
              <li class="songlist__header_album">专辑</li>
              <li class="songlist__header_time">时长</li>
            </ul>

            <ul class="songlist__list">

              <li mid="7152757"
                  ix="0">

                <div class="songlist__item"
                     onmouseover="this.className=(this.className+' songlist__item--hover')"
                     onmouseout="this.className=this.className.replace(/ songlist__item--hover/, '')">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">1</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       title="独家"></i>

                    <a href="https://y.qq.com/n/yqq/mv/v/q0012cgv5bh.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <i class="songlist__icon songlist__icon_vip sprite"
                       title="VIP"></i>

                    <span class="songlist__songname_txt"><a href="https://y.qq.com/n/yqq/song/000loibP1R1yFb.html"
                         class="js_song"
                         title="唉声叹气 ">唉声叹气<span class="songlist__song_txt"></span></a></span>
                    <div class="mod_list_menu">
                      <a href="javascript:;"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>

                  <div class="songlist__artist"
                       title="郑秀文">

                    <a href="https://y.qq.com/n/yqq/singer/002yjHfE3aJX69.html"
                       data-singermid="002yjHfE3aJX69"
                       data-singerid="4620"
                       title="郑秀文"
                       class="singer_name">郑秀文</a>

                  </div>
                  <div class="songlist__album">
                    <a href="https://y.qq.com/n/yqq/album/003f7Aiu0LvruI.html"
                       title="华纳皇牌极品HDCD精选34曲 (HDCD Remaster)"
                       class="album_name"
                       data-albummid="003f7Aiu0LvruI"
                       data-albumid="651883">华纳皇牌极品HDCD精选34曲 (HDCD Remaster)</a>
                  </div>
                  <div class="songlist__time">04:22</div>
                  <div class="songlist__other">

                  </div>
                  <a href="javascript:;"
                     class="songlist__delete js_delete"
                     data-confirm="1"
                     title="删除"><span class="icon_txt">删除</span></a>
                </div>
              </li>

              <li mid="1347411"
                  ix="1">

                <div class="songlist__item songlist__item--even "
                     onmouseover="this.className=(this.className+' songlist__item--hover')"
                     onmouseout="this.className=this.className.replace(/ songlist__item--hover/, '')">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">2</div>
                  <div class="songlist__songname">

                    <span class="songlist__songname_txt"><a href="https://y.qq.com/n/yqq/song/002z36ir3PGkcw.html"
                         class="js_song"
                         title="约定 (Live) ">约定 (Live)<span class="songlist__song_txt"></span></a></span>
                    <div class="mod_list_menu">
                      <a href="javascript:;"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>

                  <div class="songlist__artist"
                       title="张学友">

                    <a href="https://y.qq.com/n/yqq/singer/004Be55m1SJaLk.html"
                       data-singermid="004Be55m1SJaLk"
                       data-singerid="174"
                       title="张学友"
                       class="singer_name">张学友</a>

                  </div>
                  <div class="songlist__album">
                    <a href="https://y.qq.com/n/yqq/album/0022wXa03nwT1n.html"
                       title="活出生命Live演唱会 (Live)"
                       class="album_name"
                       data-albummid="0022wXa03nwT1n"
                       data-albumid="59787">活出生命Live演唱会 (Live)</a>
                  </div>
                  <div class="songlist__time">04:07</div>
                  <div class="songlist__other">

                  </div>
                  <a href="javascript:;"
                     class="songlist__delete js_delete"
                     data-confirm="1"
                     title="删除"><span class="icon_txt">删除</span></a>
                </div>
              </li>

              <li mid="1410008"
                  ix="2">

                <div class="songlist__item"
                     onmouseover="this.className=(this.className+' songlist__item--hover')"
                     onmouseout="this.className=this.className.replace(/ songlist__item--hover/, '')">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">3</div>
                  <div class="songlist__songname">

                    <span class="songlist__songname_txt"><a href="https://y.qq.com/n/yqq/song/004NWb2e2HENE9.html"
                         class="js_song"
                         title="最冷一天 ">最冷一天<span class="songlist__song_txt"></span></a></span>
                    <div class="mod_list_menu">
                      <a href="javascript:;"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>

                  <div class="songlist__artist"
                       title="陈奕迅">

                    <a href="https://y.qq.com/n/yqq/singer/003Nz2So3XXYek.html"
                       data-singermid="003Nz2So3XXYek"
                       data-singerid="143"
                       title="陈奕迅"
                       class="singer_name">陈奕迅</a>

                  </div>
                  <div class="songlist__album">
                    <a href="https://y.qq.com/n/yqq/album/001ZLjzB19w316.html"
                       title="ReImagine Leslie Cheung"
                       class="album_name"
                       data-albummid="001ZLjzB19w316"
                       data-albumid="114589">ReImagine Leslie Cheung</a>
                  </div>
                  <div class="songlist__time">04:23</div>
                  <div class="songlist__other">

                  </div>
                  <a href="javascript:;"
                     class="songlist__delete js_delete"
                     data-confirm="1"
                     title="删除"><span class="icon_txt">删除</span></a>
                </div>
              </li>

              <li mid="102351592"
                  ix="3">

                <div class="songlist__item songlist__item--even "
                     onmouseover="this.className=(this.className+' songlist__item--hover')"
                     onmouseout="this.className=this.className.replace(/ songlist__item--hover/, '')">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">4</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       title="独家"></i>

                    <i class="songlist__icon songlist__icon_vip sprite"
                       title="VIP"></i>

                    <span class="songlist__songname_txt"><a href="https://y.qq.com/n/yqq/song/002NJagq0hGoCl.html"
                         class="js_song"
                         title="少女的祈祷 (Live) ">少女的祈祷 (Live)<span class="songlist__song_txt"></span></a></span>
                    <div class="mod_list_menu">
                      <a href="javascript:;"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>

                  <div class="songlist__artist"
                       title="张智霖">

                    <a href="https://y.qq.com/n/yqq/singer/004HStLx460K4g.html"
                       data-singermid="004HStLx460K4g"
                       data-singerid="90"
                       title="张智霖"
                       class="singer_name">张智霖</a>

                  </div>
                  <div class="songlist__album">
                    <a href="https://y.qq.com/n/yqq/album/001ZaCQY2OxVMg.html"
                       title=""
                       class="album_name"
                       data-albummid="001ZaCQY2OxVMg"
                       data-albumid="8623"></a>
                  </div>
                  <div class="songlist__time">03:51</div>
                  <div class="songlist__other">

                  </div>
                  <a href="javascript:;"
                     class="songlist__delete js_delete"
                     data-confirm="1"
                     title="删除"><span class="icon_txt">删除</span></a>
                </div>
              </li>

              <li mid="107542768"
                  ix="4">

                <div class="songlist__item"
                     onmouseover="this.className=(this.className+' songlist__item--hover')"
                     onmouseout="this.className=this.className.replace(/ songlist__item--hover/, '')">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">5</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       title="独家"></i>

                    <a href="https://y.qq.com/n/yqq/mv/v/m0020j19ee4.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <i class="songlist__icon songlist__icon_vip sprite"
                       title="VIP"></i>

                    <span class="songlist__songname_txt"><a href="https://y.qq.com/n/yqq/song/004FWc2t417RYS.html"
                         class="js_song"
                         title="失恋的意义 ">失恋的意义<span class="songlist__song_txt"></span></a></span>
                    <div class="mod_list_menu">
                      <a href="javascript:;"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>

                  <div class="songlist__artist"
                       title="卫兰">

                    <a href="https://y.qq.com/n/yqq/singer/0018IojC2R0SZW.html"
                       data-singermid="0018IojC2R0SZW"
                       data-singerid="5021"
                       title="卫兰"
                       class="singer_name">卫兰</a>

                  </div>
                  <div class="songlist__album">
                    <a href="https://y.qq.com/n/yqq/album/000FQncc03juWW.html"
                       title="失恋的意义"
                       class="album_name"
                       data-albummid="000FQncc03juWW"
                       data-albumid="1501694">失恋的意义</a>
                  </div>
                  <div class="songlist__time">03:52</div>
                  <div class="songlist__other">

                  </div>
                  <a href="javascript:;"
                     class="songlist__delete js_delete"
                     data-confirm="1"
                     title="删除"><span class="icon_txt">删除</span></a>
                </div>
              </li>

              <li mid="100483514"
                  ix="5">

                <div class="songlist__item songlist__item--even "
                     onmouseover="this.className=(this.className+' songlist__item--hover')"
                     onmouseout="this.className=this.className.replace(/ songlist__item--hover/, '')">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">6</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       title="独家"></i>

                    <a href="https://y.qq.com/n/yqq/mv/v/b00153aksvv.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <i class="songlist__icon songlist__icon_vip sprite"
                       title="VIP"></i>

                    <span class="songlist__songname_txt"><a href="https://y.qq.com/n/yqq/song/000VyjeH2R4rlC.html"
                         class="js_song"
                         title="相逢何必曾相识 ">相逢何必曾相识<span class="songlist__song_txt"></span></a></span>
                    <div class="mod_list_menu">
                      <a href="javascript:;"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>

                  <div class="songlist__artist"
                       title="许靖韵 / 张致恒">

                    <a href="https://y.qq.com/n/yqq/singer/0025uYT23dPLye.html"
                       data-singermid="0025uYT23dPLye"
                       data-singerid="164219"
                       title="许靖韵"
                       class="singer_name">许靖韵</a>

                    /
                    <a href="https://y.qq.com/n/yqq/singer/002NE5M51OpGma.html"
                       data-singermid="002NE5M51OpGma"
                       data-singerid="36850"
                       title="张致恒"
                       class="singer_name">张致恒</a>

                  </div>
                  <div class="songlist__album">
                    <a href="https://y.qq.com/n/yqq/album/001UPPCe3HrSdA.html"
                       title="相逢何必曾相识"
                       class="album_name"
                       data-albummid="001UPPCe3HrSdA"
                       data-albumid="805939">相逢何必曾相识</a>
                  </div>
                  <div class="songlist__time">04:29</div>
                  <div class="songlist__other">

                  </div>
                  <a href="javascript:;"
                     class="songlist__delete js_delete"
                     data-confirm="1"
                     title="删除"><span class="icon_txt">删除</span></a>
                </div>
              </li>

              <li mid="4744710"
                  ix="6">

                <div class="songlist__item"
                     onmouseover="this.className=(this.className+' songlist__item--hover')"
                     onmouseout="this.className=this.className.replace(/ songlist__item--hover/, '')">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">7</div>
                  <div class="songlist__songname">

                    <a href="https://y.qq.com/n/yqq/mv/v/j00177rc929.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <span class="songlist__songname_txt"><a href="https://y.qq.com/n/yqq/song/000pi9Ow3CqeOa.html"
                         class="js_song"
                         title="倾城 《一路向西》电影片尾曲|《迷乱》粤语版">倾城<span class="songlist__song_txt">《一路向西》电影片尾曲|《迷乱》粤语版</span></a></span>
                    <div class="mod_list_menu">
                      <a href="javascript:;"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down"></i>
                        <span class="icon_txt">下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>

                  <div class="songlist__artist"
                       title="许美静">

                    <a href="https://y.qq.com/n/yqq/singer/000jiXJP0fMEbc.html"
                       data-singermid="000jiXJP0fMEbc"
                       data-singerid="240"
                       title="许美静"
                       class="singer_name">许美静</a>

                  </div>
                  <div class="songlist__album">
                    <a href="https://y.qq.com/n/yqq/album/001GBgPY4XHcF6.html"
                       title="静听精彩13首"
                       class="album_name"
                       data-albummid="001GBgPY4XHcF6"
                       data-albumid="8500">静听精彩13首</a>
                  </div>
                  <div class="songlist__time">04:15</div>
                  <div class="songlist__other">

                  </div>
                  <a href="javascript:;"
                     class="songlist__delete js_delete"
                     data-confirm="1"
                     title="删除"><span class="icon_txt">删除</span></a>
                </div>
              </li>

              <li mid="5046241"
                  ix="7">

                <div class="songlist__item songlist__item--even "
                     onmouseover="this.className=(this.className+' songlist__item--hover')"
                     onmouseout="this.className=this.className.replace(/ songlist__item--hover/, '')">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">8</div>
                  <div class="songlist__songname">

                    <a href="https://y.qq.com/n/yqq/mv/v/n0012is1vsv.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <span class="songlist__songname_txt"><a href="https://y.qq.com/n/yqq/song/0012wZKo4Z8Swr.html"
                         class="js_song"
                         title="纸牌屋 ">纸牌屋<span class="songlist__song_txt"></span></a></span>
                    <div class="mod_list_menu">
                      <a href="javascript:;"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>

                  <div class="songlist__artist"
                       title="李克勤">

                    <a href="https://y.qq.com/n/yqq/singer/003nS2v740Lxcw.html"
                       data-singermid="003nS2v740Lxcw"
                       data-singerid="235"
                       title="李克勤"
                       class="singer_name">李克勤</a>

                  </div>
                  <div class="songlist__album">
                    <a href="https://y.qq.com/n/yqq/album/001xCkem0N2QbQ.html"
                       title="纸牌屋"
                       class="album_name"
                       data-albummid="001xCkem0N2QbQ"
                       data-albumid="436931">纸牌屋</a>
                  </div>
                  <div class="songlist__time">03:34</div>
                  <div class="songlist__other">

                  </div>
                  <a href="javascript:;"
                     class="songlist__delete js_delete"
                     data-confirm="1"
                     title="删除"><span class="icon_txt">删除</span></a>
                </div>
              </li>

              <li mid="759060"
                  ix="8">

                <div class="songlist__item"
                     onmouseover="this.className=(this.className+' songlist__item--hover')"
                     onmouseout="this.className=this.className.replace(/ songlist__item--hover/, '')">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">9</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       title="独家"></i>

                    <a href="https://y.qq.com/n/yqq/mv/v/z0013sr3ton.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <i class="songlist__icon songlist__icon_vip sprite"
                       title="VIP"></i>

                    <span class="songlist__songname_txt"><a href="https://y.qq.com/n/yqq/song/001aHqfj1hDgTD.html"
                         class="js_song"
                         title="梦伴 ">梦伴<span class="songlist__song_txt"></span></a></span>
                    <div class="mod_list_menu">
                      <a href="javascript:;"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>

                  <div class="songlist__artist"
                       title="李悦君">

                    <a href="https://y.qq.com/n/yqq/singer/000VmNCz4Lb27Y.html"
                       data-singermid="000VmNCz4Lb27Y"
                       data-singerid="11932"
                       title="李悦君"
                       class="singer_name">李悦君</a>

                  </div>
                  <div class="songlist__album">
                    <a href="https://y.qq.com/n/yqq/album/0043CH6714ZJeP.html"
                       title="同名专辑"
                       class="album_name"
                       data-albummid="0043CH6714ZJeP"
                       data-albumid="64114">同名专辑</a>
                  </div>
                  <div class="songlist__time">04:07</div>
                  <div class="songlist__other">

                  </div>
                  <a href="javascript:;"
                     class="songlist__delete js_delete"
                     data-confirm="1"
                     title="删除"><span class="icon_txt">删除</span></a>
                </div>
              </li>

              <li mid="7158124"
                  ix="9">

                <div class="songlist__item songlist__item--even "
                     onmouseover="this.className=(this.className+' songlist__item--hover')"
                     onmouseout="this.className=this.className.replace(/ songlist__item--hover/, '')">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">10</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       title="独家"></i>

                    <a href="https://y.qq.com/n/yqq/mv/v/i0016dzh7q3.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <i class="songlist__icon songlist__icon_vip sprite"
                       title="VIP"></i>

                    <span class="songlist__songname_txt"><a href="https://y.qq.com/n/yqq/song/0019Cybn31yZ0J.html"
                         class="js_song"
                         title="有只雀仔 ">有只雀仔<span class="songlist__song_txt"></span></a></span>
                    <div class="mod_list_menu">
                      <a href="javascript:;"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>

                  <div class="songlist__artist"
                       title="薛凯琪">

                    <a href="https://y.qq.com/n/yqq/singer/002H2FME3sl3Ne.html"
                       data-singermid="002H2FME3sl3Ne"
                       data-singerid="123"
                       title="薛凯琪"
                       class="singer_name">薛凯琪</a>

                  </div>
                  <div class="songlist__album">
                    <a href="https://y.qq.com/n/yqq/album/001hBwps0zrQjE.html"
                       title="Me"
                       class="album_name"
                       data-albummid="001hBwps0zrQjE"
                       data-albumid="652988">Me</a>
                  </div>
                  <div class="songlist__time">03:19</div>
                  <div class="songlist__other">

                  </div>
                  <a href="javascript:;"
                     class="songlist__delete js_delete"
                     data-confirm="1"
                     title="删除"><span class="icon_txt">删除</span></a>
                </div>
              </li>
            </ul>
          </div>
          <div class="mod_songlist_toolbar mod_songlist_toolbar--edit js_foot_batch"
               style="display:none;">
            <div class="songlist__edit songlist__edit--check sprite"
                 style="display:none;">
              <input type="checkbox"
                     class="songlist__checkbox js_check_all">
            </div>
            <a href="javascript:;"
               class="mod_btn js_all_play"
               data-stat="y_new.gedan.songlist.playall"><i class="mod_btn__icon_play"></i>播放全部</a>
            <a href="javascript:;"
               class="mod_btn js_all_fav"><i class="mod_btn__icon_add"></i>添加到</a>
            <a href="javascript:;"
               class="mod_btn js_all_down"><i class="mod_btn__icon_down"></i>下载</a>
            <a href="javascript:;"
               class="mod_btn js_all_delete"
               style="display:none;"><i class="mod_btn__icon_delete"></i>删除</a>
            <a href="javascript:;"
               class="mod_btn js_batch"><i class="mod_btn__icon_batch"></i>批量操作</a>
          </div>
          <!-- <div id="page_box">
            <div class="client_guide"
                 id="limitButton">
              <p class="client_guide__txt">查看更多内容，请下载客户端</p><a href="javascript:;"
                 class="client_guide__btn js_limitButton">立即下载</a>
            </div>
          </div> -->
        </div>
        <div class="detail_layout__other">
          <div class="mod_about js_box"
               id="album_desc"
               style="display:;">
            <h3 class="about__tit">简介</h3>
            <div class="about__cont">
              <p>从八十年代至今，港乐有太多经典。尽管跨越了几代人的青春，它的美都能被不同年龄段的人所接纳。让我们一次性回味港乐黄金年代的美丽之声。</p>
            </div>
            <a href="javascript:;"
               class="about__more"
               data-stat="y_new.gedan.moreinfo"
               data-left="0"
               data-top="-187"
               data-target="popup_data_detail"
               style="display: none;">[更多]</a>
            <a href="javascript:;"
               class="btn_edit js_edit"
               style="display:none;"><i class="icon_txt">编辑</i></a>
            <div class="mod_form_textarea js_edit_box"
                 style="display:none;">
              <div class="form_textarea__box">
                <textarea class="form_textarea__input"
                          rows="4"
                          id="album_intro"
                          placeholder="每张歌单都有你的感情、经历和故事，倾诉一下吧！">从八十年代至今，港乐有太多经典。尽管跨越了几代人的青春，它的美都能被不同年龄段的人所接纳。让我们一次性回味港乐黄金年代的美丽之声。</textarea>
              </div>
              <div class="form_textarea__tips"
                   id="introNumTips">剩余1935字</div>
            </div>
          </div>

          <div class="other_part"
               id="similaralbum"
               style="">
            <h3 class="other_part__tit">相似歌单</h3>
            <div class="mod_playlist">
              <ul class="playlist__list">
                <li class="playlist__item"
                    onmouseover="this.className=(this.className+' playlist__item--hover')"
                    onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
                    data-disstid="1167623857">
                  <div class="playlist__item_box">
                    <div class="playlist__cover mod_cover"><a href="https://y.qq.com/n/yqq/playlist/1167623857.html#stat=y_new.gedan.otheralbum.click"
                         onclick="setStatCookie&amp;&amp;setStatCookie();"
                         data-disstid="1167623857"
                         data-stat="y_new.gedan.otheralbum.click"
                         class="js_playlist"><img src="//p.qpic.cn/music_cover/3Ph9mcSjlrcZPb8EGfUC9499vKUwiawspxe6Q8u14gibPlxh80OLpSFg/600?n=1&amp;max_age=2592000"
                             onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;"
                             alt="「粤语金曲 」对你爱爱爱不完"
                             class="playlist__pic"><i class="mod_cover__icon_play js_play"
                           data-stat="y_new.gedan.otheralbum.play"></i></a></div>
                    <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playlist/1167623857.html#stat=y_new.gedan.otheralbum.click"
                           onclick="setStatCookie&amp;&amp;setStatCookie();"
                           data-disstid="1167623857"
                           data-stat="y_new.gedan.otheralbum.click"
                           class="js_playlist"
                           title="「粤语金曲 」对你爱爱爱不完">「粤语金曲 」对你爱爱爱不完</a></span></h4>
                    <div class="playlist__author">

                      <a href="//y.qq.com/portal/profile.html?uin=oivAowck7e4zov**"
                         class="js_user"
                         data-uin="oivAowck7e4zov**"
                         title="落叶飘雪">落叶飘雪</a>

                    </div>
                  </div>
                </li>

                <li class="playlist__item"
                    onmouseover="this.className=(this.className+' playlist__item--hover')"
                    onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
                    data-disstid="3267877260">
                  <div class="playlist__item_box">
                    <div class="playlist__cover mod_cover"><a href="https://y.qq.com/n/yqq/playlist/3267877260.html#stat=y_new.gedan.otheralbum.click"
                         onclick="setStatCookie&amp;&amp;setStatCookie();"
                         data-disstid="3267877260"
                         data-stat="y_new.gedan.otheralbum.click"
                         class="js_playlist"><img src="//p.qpic.cn/music_cover/nGIvUJ7zJn2Dbb5IezsMbtIIW0q4NbdRznicuWheSytWZnbYrA5DKhQ/600?n=1&amp;max_age=2592000"
                             onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;"
                             alt="情迷香港：200首港乐带你重温经典！"
                             class="playlist__pic"><i class="mod_cover__icon_play js_play"
                           data-stat="y_new.gedan.otheralbum.play"></i></a></div>
                    <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playlist/3267877260.html#stat=y_new.gedan.otheralbum.click"
                           onclick="setStatCookie&amp;&amp;setStatCookie();"
                           data-disstid="3267877260"
                           data-stat="y_new.gedan.otheralbum.click"
                           class="js_playlist"
                           title="情迷香港：200首港乐带你重温经典！">情迷香港：200首港乐带你重温经典！</a></span></h4>
                    <div class="playlist__author">

                      <a href="//y.qq.com/portal/profile.html?uin=owSs7K-5NK4kNn**"
                         class="js_user"
                         data-uin="owSs7K-5NK4kNn**"
                         title="乌龙茶">乌龙茶</a>

                    </div>
                  </div>
                </li>

                <li class="playlist__item"
                    onmouseover="this.className=(this.className+' playlist__item--hover')"
                    onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
                    data-disstid="1169460639">
                  <div class="playlist__item_box">
                    <div class="playlist__cover mod_cover"><a href="https://y.qq.com/n/yqq/playlist/1169460639.html#stat=y_new.gedan.otheralbum.click"
                         onclick="setStatCookie&amp;&amp;setStatCookie();"
                         data-disstid="1169460639"
                         data-stat="y_new.gedan.otheralbum.click"
                         class="js_playlist"><img src="//p.qpic.cn/music_cover/h3YTnYibRcAO4KAvU4cvS9MMum8ic1xibC2uiasMb2ERqvAoCOoyzichOKA/600?n=1&amp;max_age=2592000"
                             onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;"
                             alt="「港乐情怀」粤听粤爱"
                             class="playlist__pic"><i class="mod_cover__icon_play js_play"
                           data-stat="y_new.gedan.otheralbum.play"></i></a></div>
                    <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playlist/1169460639.html#stat=y_new.gedan.otheralbum.click"
                           onclick="setStatCookie&amp;&amp;setStatCookie();"
                           data-disstid="1169460639"
                           data-stat="y_new.gedan.otheralbum.click"
                           class="js_playlist"
                           title="「港乐情怀」粤听粤爱">「港乐情怀」粤听粤爱</a></span></h4>
                    <div class="playlist__author">

                      <a href="//y.qq.com/portal/profile.html?uin=oivloeoi7eozov**"
                         class="js_user"
                         data-uin="oivloeoi7eozov**"
                         title="南风轻语">南风轻语</a>

                    </div>
                  </div>
                </li>

                <li class="playlist__item"
                    onmouseover="this.className=(this.className+' playlist__item--hover')"
                    onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
                    data-disstid="2370564970">
                  <div class="playlist__item_box">
                    <div class="playlist__cover mod_cover"><a href="https://y.qq.com/n/yqq/playlist/2370564970.html#stat=y_new.gedan.otheralbum.click"
                         onclick="setStatCookie&amp;&amp;setStatCookie();"
                         data-disstid="2370564970"
                         data-stat="y_new.gedan.otheralbum.click"
                         class="js_playlist"><img src="//p.qpic.cn/music_cover/Mpne2zrLV5cu4NPFdfdiakgfqf4d049jWb4MaMk6bibm3skicd9G2zGiaw/600?n=1&amp;max_age=2592000"
                             onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;"
                             alt="「粤语小情歌」起床铃声的最佳选择"
                             class="playlist__pic"><i class="mod_cover__icon_play js_play"
                           data-stat="y_new.gedan.otheralbum.play"></i></a></div>
                    <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playlist/2370564970.html#stat=y_new.gedan.otheralbum.click"
                           onclick="setStatCookie&amp;&amp;setStatCookie();"
                           data-disstid="2370564970"
                           data-stat="y_new.gedan.otheralbum.click"
                           class="js_playlist"
                           title="「粤语小情歌」起床铃声的最佳选择">「粤语小情歌」起床铃声的最佳选择</a></span></h4>
                    <div class="playlist__author">

                      <a href="//y.qq.com/portal/profile.html?uin=oi4l7Koiowcq7v**"
                         class="js_user"
                         data-uin="oi4l7Koiowcq7v**"
                         title="吃糖少年">吃糖少年</a>

                    </div>
                  </div>
                </li>

                <li class="playlist__item"
                    onmouseover="this.className=(this.className+' playlist__item--hover')"
                    onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
                    data-disstid="1471478244">
                  <div class="playlist__item_box">
                    <div class="playlist__cover mod_cover"><a href="https://y.qq.com/n/yqq/playlist/1471478244.html#stat=y_new.gedan.otheralbum.click"
                         onclick="setStatCookie&amp;&amp;setStatCookie();"
                         data-disstid="1471478244"
                         data-stat="y_new.gedan.otheralbum.click"
                         class="js_playlist"><img src="//p.qpic.cn/music_cover/56aO2N0zBFcgx8Wfh6ic6iaQbcYSkpgy8tv2r13dKeGM7A5XRrXpoIpQ/600?n=1&amp;max_age=2592000"
                             onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;"
                             alt="百首情歌粤语铃声精选"
                             class="playlist__pic"><i class="mod_cover__icon_play js_play"
                           data-stat="y_new.gedan.otheralbum.play"></i></a></div>
                    <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playlist/1471478244.html#stat=y_new.gedan.otheralbum.click"
                           onclick="setStatCookie&amp;&amp;setStatCookie();"
                           data-disstid="1471478244"
                           data-stat="y_new.gedan.otheralbum.click"
                           class="js_playlist"
                           title="百首情歌粤语铃声精选">百首情歌粤语铃声精选</a></span></h4>
                    <div class="playlist__author">

                      <a href="//y.qq.com/portal/profile.html?uin=owEioKclowoAoc**"
                         class="js_user"
                         data-uin="owEioKclowoAoc**"
                         title="babyface">babyface</a>

                    </div>
                  </div>
                </li>

                <li class="playlist__item"
                    onmouseover="this.className=(this.className+' playlist__item--hover')"
                    onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
                    data-disstid="2670809554">
                  <div class="playlist__item_box">
                    <div class="playlist__cover mod_cover"><a href="https://y.qq.com/n/yqq/playlist/2670809554.html#stat=y_new.gedan.otheralbum.click"
                         onclick="setStatCookie&amp;&amp;setStatCookie();"
                         data-disstid="2670809554"
                         data-stat="y_new.gedan.otheralbum.click"
                         class="js_playlist"><img src="//p.qpic.cn/music_cover/rOBOy1ENE6ID2zFs5W6ibt0NX8HlVAT5pjJ9eQP4gVUDOSIricHhDFKA/600?n=1&amp;max_age=2592000"
                             onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;"
                             alt="「粤语」歌里有故事，故事里有你"
                             class="playlist__pic"><i class="mod_cover__icon_play js_play"
                           data-stat="y_new.gedan.otheralbum.play"></i></a></div>
                    <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playlist/2670809554.html#stat=y_new.gedan.otheralbum.click"
                           onclick="setStatCookie&amp;&amp;setStatCookie();"
                           data-disstid="2670809554"
                           data-stat="y_new.gedan.otheralbum.click"
                           class="js_playlist"
                           title="「粤语」歌里有故事，故事里有你">「粤语」歌里有故事，故事里有你</a></span></h4>
                    <div class="playlist__author">

                      <a href="//y.qq.com/portal/profile.html?uin=oinA7i6ioKCl7c**"
                         class="js_user"
                         data-uin="oinA7i6ioKCl7c**"
                         title="繁华的夏">繁华的夏</a>

                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <!-- 专辑简介 -->
        <div class="popup_data_detail"
             id="popup_data_detail"
             data-aria="popup"
             style="display:none;z-index:1000000;">
          <div class="popup_data_detail__cont">
            <h3 class="popup_data_detail__tit">简介</h3>
            <p>从八十年代至今，港乐有太多经典。尽管跨越了几代人的青春，它的美都能被不同年龄段的人所接纳。让我们一次性回味港乐黄金年代的美丽之声。</p>
          </div>
          <i class="popup_data_detail__arrow"></i>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
  @import "~/assets/scss/playlistDetail.css";
</style>