<template>

    <section class="container">
        <div class="card my-3 mx-auto" style="width: 80%">
            <h4 class='card-header'>QnA 수정</h4>
            <div class='card-body'>
                <form id="myform" method="post" action="qnaMod.do">
                    <input type="hidden" name="q_num" value="${sessionScope.q_num }">
                        <div class="form-group">
                            <input
                                name="q_title"
                                type="text"
                                class="form-control mb-2"
                                value="${qna.q_title }"
                                aria-describedby="basic-addon1">
                                <textarea class="form-control" rows="6" name="q_desc">${qna.q_desc }</textarea>
                            </div>
                            <div class='text-right'>
                                <button type="submit" class="btn btn-primary insertinfo">등록</button>
                            </div>
                        </form>

                    </div>
                </div>
            </section>

        </template>

        <script>
            import http from "../http-common";

            export default {
                name: "qnaadd",
                data() {
                    return {
                        loading: true,
                        errored: false,
                        ctitle: '',
                        ccontent: '',
                        ccount: 0,
                        cid: '',
                        submitted: false
                    };
                },
                mounted() {},

                methods: {
                    showlist() {
                        this
                            .$router
                            .push("/listBoard");
                    },
                    insertBoard() {
                        if (this.ctitle == '') {
                            alert('제목을 입력하세요.');
                            return;
                        }
                        if (this.ccontent == '') {
                            alert('내용을 입력하세요.');
                            return;
                        }

                        http
                            .post('/registerboard', {
                                bid: this.cid,
                                btitle: this.ctitle,
                                bcontent: this.ccontent,
                                bcount: this.bcount,
                                user_id: localStorage.getItem("id")
                            })
                            .then(response => {
                                if (response.data.state == 0) {
                                    alert("질문등록 완료.");
                                    this.showlist();
                                } else {
                                    alert("질문등록 성공.");
                                    this.showlist();
                                }
                            });
                        this.submitted = true;
                    }
                }
            }
        </script>