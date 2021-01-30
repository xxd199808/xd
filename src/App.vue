<template>
    <div class="aaaa" id="app">
        <div class="header">
            <div class="header-content">
                header
            </div>
        </div>
        <div class="nav">
            <div class="nav-left"></div>
            <div class="nav-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style lang="less">
@import "assets/css/common.less";
@import "assets/element-ui.css";

.aaaa {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
}

.header {
    height: 50px;
    padding: 0 28px;
    background-color: @c_block;
}

.header-content {

}

.nav {
    display: flex;
    flex: 1;
    padding: 8px;
    //width: 100%;
    //background-color: #13ce66;
}

.nav-left {
    width: 200px;
    padding: 20px;
    //border: 1px solid @c_bor_base;
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(0, 0, 0, .16);
}

.nav-content {
    flex: 1;
    padding: 10px;
    margin-left: 12px;
    //background-color: #3a3838;
    //border: 1px solid @c_bor_base;
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(0, 0, 0, .16);
}
</style>
