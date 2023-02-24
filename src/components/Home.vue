<template>
  <main>
      <div class="main">
        <div>
          <SideMenu />
        </div>

        <div class="dashboard">
          <div class="title">
            <h3>Dashboard</h3>
            <p>Home / <span style="font-weight: 500">Dashboard</span></p>
          </div>

          <div >
            <div style="display:flex">
              <div class="statistic">
                <div>
                  <h4>Statistics</h4>
                  <div class="stat">
                    <div style="margin-left: -2rem; margin-right: 1rem;">
                      <p style="font-size: 35px;">4</p>
                      <p style="opacity: 0.5">Uploaded Data</p>
                    </div>
                    <div class="vertical-line" style="margin-left:1rem"></div>
                    <div style="margin-left:3rem">
                      <p style="font-size: 35px">11</p>
                      <p style="opacity: 0.5">Feeds</p>
                    </div>
                  </div>

                  <div class="circle-check">
                    <div id="icon">
                      <font-awesome-icon icon="fa-solid fa-circle-check" size="xl" />
                      <p><span style="font-weight: 700;">Exchange Feed</span> was added</p>
                    </div>
                    <div id="icon">
                      <font-awesome-icon icon="fa-solid fa-circle-check" size="xl" color="blue"/>
                      <p><span style="font-weight: 700;">Exchange data</span> was uploaded</p>
                    </div>
                    <div id="icon">
                      <font-awesome-icon icon="fa-solid fa-circle-check" size="xl" color="darkred"/>
                      <p style="font-weight:400"><span style="font-weight: 700;">AGM Document </span>was added</p>
                    </div>
                  </div>

                  <div>
                    <p><span style="opacity: 0.5">Last Login:</span> <span style="font-weight: 700;">12:10PM</span></p> 
                  </div>
                </div>
              </div>

              <div class="news">
                <div class="heading">
                  <h5 @click="onClick" style="margin-right: 1rem;"> <button>Trending</button></h5>
                  <div class="vertical-line3"></div>
                  <h5 @click="onClick" style="margin-left: 1rem;"><button>Activity log</button></h5>
                </div>

                <!-- <div class="news-image" v-for="(newsItem, index) in news" :key="newsItem.title"> -->
                <div class="news-image">
                  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner" >
                      <!-- <div class="carousel-item" :class="{ active: index === 0 }"> -->
                      <div class="carousel-item active">
                        <img src="@/assets/ceo_3.jpg" alt="..."/>
                        <!-- <img :src="newsItem.image_url" class="d-block w-100" alt="..."> -->
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam obcaecati esse asperiores ea accusantium eos in? Labore, dignissimos quaerat. Quos autem cum error ullam, odit veritatis obcaecati nam vitae!
                          <!-- <span>{{ newsItem.title }} ... </span>
                          {{ shortenedContent(newsItem.content) }}
                          <a :href="newsItem.link" style="text-decoration: none;">Read more</a> -->
                        </p>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div class="activity-logs">
                  <h3>Activity Logs</h3>
                </div>
              </div>

             
            </div>
            
            <div class="dash-bottom">
              <div class="quick-link">
                <h5 style="text-align: center; margin-bottom: 1rem;">Quick Actions</h5>
                <div class="quick" style="margin-bottom: 1.5rem;">
                  <button><img src="@/assets/upload.svg" style="margin-right: 1rem;"/> Upload data</button>
                  <button><img src="@/assets/edit.svg" style="margin-right: 1rem;"/> Edit data</button>
                </div>
                <div class="quick" style="margin-bottom: 1.5rem;">
                  <button><img src="@/assets/gallery.svg" style="margin-right: 1rem;"/> Gallery</button>
                  <button><img src="@/assets/doc.svg" style="margin-right: 1rem;"/>Documents</button>
                </div>
                <div class="quick">
                  <button><img src="@/assets/contacts.svg" style="margin-right: 1rem;"/>Contacts</button>
                </div>
              </div>

              <div class="vertical-line2"></div>

              <div class="notice">
                <h5 style="color:red">Notice:</h5>
                <ul>
                  <li>All numbers must be entered in full (eg. 1 billion is 1,000,000, 0000 and not 1bn)</li>
                  <li>Currency symbols and other symbols ($, #, %,) are not allowed, simply enter the applicable number in full</li>
                  <li>All monitory values are in dollars (USD)</li>
                  <li>USD exchange rate to be used is the exchange rate on the last date of the month and this rate should be provided under indicators</li>
                  <li>Fill in zero (0) in all metrics that do not apply</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
  </main>
</template>



<script>
  import Footer from './Footer.vue'
  import SideMenu from './SideMenu.vue'
  // import axios from 'axios';

  export default {
    name: "HomePage",
    components: {
      SideMenu,
        Footer,
    },

    data(){
      return {
        news: []
      }
    },

    // computed: {
    // shortenedContent(content) {
    //   const words = content.split(' ');
    //   return words.slice(0, 20).join(' ') + ' ...';
    //   },
    // },

    // async mounted(){
    //   try {
    //       await axios.get("https://newsdata.io/api/1/news?apikey=pub_170512b24575c227ee4affd297fb05f6d9325&q=exchange")
    //       .then(res => {
    //         this.news = res.data.results
    //       })
    //       .catch(error => {
    //         console.log(error)
    //       })
    //     } catch (err) {
    //       console.log(err)
    //     }
    // },
  }
</script>



<style scoped>

  main {
    height: 100vh;
  }

  .main {
    display: flex;
  }

  .vertical-line {
    border: 1px solid rgba(217, 217, 217, 0.68);
    height: 3rem;
    margin-top: 1rem;
  }

  .news {
    border: 1px solid #D3D3DA;
    width: 50rem;
    height: 25rem;
    border-radius: 20px;
  }

  .activity-logs {
    border: 1px solid red;
    display: none;
    position: absolute;
    top: 11.45rem;
    right: 23.93rem;
    height: 21.5rem;
    width: 50rem;
    margin-top: 0.5rem;
    border-radius: 0 0 20px 20px;
  }

  .news .heading {
    display: flex;
    margin-top: 0.8rem;
    justify-content: center;

  }

  .news button {
    border: none;
    background: none;
    /* opacity: 0.5; */
  }

  .news-image img {
    /* background-image: url("@/assets/ceo_3.jpg"); */
    height: 21.5rem;
    width: 50rem;
    margin-top: 0.5rem;
    border-radius: 0 0 20px 20px;
  }

  .news-image p {
    position: absolute;
    width: 40rem;
    margin: auto;
    text-align: center;
    top: 14rem;
    right: 5rem;
    color: whitesmoke;
    background-color: #08022d9c;
    padding: 1rem;
  }


  .vertical-line3 {
    border: 1px solid rgba(217, 217, 217, 0.68);
    height: 2rem;
  }


  .statistic {
    border: 1px solid grey;
    width: 20rem;
    height: 25rem;
    margin: 0 2rem 2rem 2rem;
    border-radius: 20px;
    padding: 1rem;
    text-align: center;
    background-color: #08022D;
    color: white;
  }


  .statistic .stat {
    display: flex;
    justify-content: center;
  }

  .circle-check {
    margin: 2rem 0 2rem;
  }

  .circle-check #icon {
    display: flex;
    margin-left: 1rem;
    
  }

  .circle-check p {
    margin-left: 1rem;
  }

  .dash-bottom {
    border: 1px solid #D3D3DA;
    width: 72rem;
    margin-left: 2rem;
    border-radius: 20px;
    display: flex;

  }

  .vertical-line2 {
    border: 1px solid rgba(217, 217, 217, 0.68);
    height: 12rem;
    margin-top: 4rem;
  }


  .notice {
    padding: 2rem;
    width: 50rem;
  }

  
  .quick-link {
    width: 40rem;
    padding: 1rem;

  }

  .quick-link button {
    border: none;
    height: 4rem;
    padding: 0.5rem;
    width: 13rem;
  }


  .quick-link .quick {
    display: flex;
    justify-content: space-around;
  }

  .dashboard {
    margin-top: 5px;
    margin-left: 5vw;
    border: 1px solid #D9D9D9;
    border-radius: 30px 0 0 30px;
    width: 100vw;
    height: 92vh;
    padding-bottom: 1rem;
    overflow-y: scroll;
  }

  .dashboard .title {
    margin: 2rem;

  }


</style>