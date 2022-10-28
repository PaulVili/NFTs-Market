const NFTsBlocks = document.querySelector('.curatedCollectionsBlocksLine');

let NFTs = {
    collectionImg: "https://f8n-production.imgix.net/collections/k1qyzcmjf.png?q=45&w=160&h=160&fit=crop&dpr=2",
    collectionName: "Don't Look Back",
    amountNFTs: "28",
    NFTs: "https://f8n-production-collection-assets.imgix.net/0xDB204A488e59f68255D674Db1fbEd7f2F333a4e7/8/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
    NFTsName: "DLB8",
    author: "@a1111ac011d0",
    price: "0.10",
    auctionEnds: "03h 10m 40s",
};

NFTsBlocks.innerHTML += `
    <style>
    .curatedCollectionsBlockContentBlockCollection{
        background: center / cover no-repeat url(${NFTs.NFTs});
        border-radius: 15px 15px 0 0;
        width: 300px;
        height: 466px;        
      }
    </style>
    <div class="curatedCollectionsBlock">
                        <div class="curatedCollectionsBlockHeading">
                            <div class="curatedCollectionsBlockHeadingProfileImgBlock">
                                <div class="curatedCollectionsBlockHeadingProfileImg">
                                    <img src="${NFTs.collectionImg}">
                                </div>
                            </div>
                            <div class="curatedCollectionsBlockHeadingContent">
                                <span class="curatedCollectionsBlockHeadingContentCollection">${NFTs.collectionName}</span>
                                <h3 class="curatedCollectionsBlockHeadingContentCollectionHeading">${NFTs.NFTsName}</h3>                                
                                <p class="curatedCollectionsBlockHeadingContentCollectionAmountOfNFT">${NFTs.amountNFTs} NFTs</p>
                                <a href="#" class="curatedCollectionsBlockHeadingContentAuthor">${NFTs.author}</a>
                            </div>                        
                        </div>
                        <div class="curatedCollectionsBlockContentBlockLine">
                            <div class="curatedCollectionsBlockContentBlock">
                                <div class="curatedCollectionsBlockContentBlockCollection">
                                    <div class="curatedCollectionsBlockContentBlockCollectionHeading">
                                        <div class="curatedCollectionsBlockContentBlockCollectionHeadingImg"><img src="${NFTs.collectionImg}" class="curatedCollectionsBlockContentBlockCollectionHeadingImg"></div>
                                        <p class="curatedCollectionsBlockContentBlockCollectionHeadingP">${NFTs.collectionName}</p>
                                    </div>
                                    <p class="curatedCollectionsBlockContentBlockCollectionP">${NFTs.collectionName}</p>
                                </div>
                                <div class="curatedCollectionsBlockContentBlockInfo">
                                    <p class="curatedCollectionsBlockContentBlockInfoAuthor">${NFTs.author}</p>
                                    <div class="curatedCollectionsBlockContentBlockInfoPriceBlock">
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockReserve">Buy Now</p>
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockETH">${NFTs.price} ETH</p>
                                    </div>
                                </div>
                            </div>
                            <div class="curatedCollectionsBlockContentBlock">
                                <div class="curatedCollectionsBlockContentBlockCollection">
                                    <div class="curatedCollectionsBlockContentBlockCollectionHeading">
                                        <div class="curatedCollectionsBlockContentBlockCollectionHeadingImg"><img src="${NFTs.collectionImg}" class="curatedCollectionsBlockContentBlockCollectionHeadingImg"></div>
                                        <p class="curatedCollectionsBlockContentBlockCollectionHeadingP">${NFTs.collectionName}</p>
                                    </div>
                                    <p class="curatedCollectionsBlockContentBlockCollectionP">${NFTs.collectionName}</p>
                                </div>
                                <div class="curatedCollectionsBlockContentBlockInfo">
                                    <p class="curatedCollectionsBlockContentBlockInfoAuthor">${NFTs.author}</p>
                                    <div class="curatedCollectionsBlockContentBlockInfoPriceBlock">
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockReserve">Buy Now</p>
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockETH">${NFTs.price} ETH</p>
                                    </div>
                                </div>
                            </div>
                            <div class="curatedCollectionsBlockContentBlock">
                                <div class="curatedCollectionsBlockContentBlockCollection">
                                    <div class="curatedCollectionsBlockContentBlockCollectionHeading">
                                        <div class="curatedCollectionsBlockContentBlockCollectionHeadingImg"><img src="${NFTs.collectionImg}" class="curatedCollectionsBlockContentBlockCollectionHeadingImg"></div>
                                        <p class="curatedCollectionsBlockContentBlockCollectionHeadingP">${NFTs.collectionName}</p>
                                    </div>
                                    <p class="curatedCollectionsBlockContentBlockCollectionP">${NFTs.collectionName}</p>
                                </div>
                                <div class="curatedCollectionsBlockContentBlockInfo">
                                    <p class="curatedCollectionsBlockContentBlockInfoAuthor">${NFTs.author}</p>
                                    <div class="curatedCollectionsBlockContentBlockInfoPriceBlock">
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockReserve">Buy Now</p>
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockETH">${NFTs.price} ETH</p>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="curatedCollectionsBlock">
                        <div class="curatedCollectionsBlockHeading">
                            <div class="curatedCollectionsBlockHeadingProfileImgBlock">
                                <div class="curatedCollectionsBlockHeadingProfileImg">
                                    <img src="${NFTs.collectionImg}">
                                </div>
                            </div>
                            <div class="curatedCollectionsBlockHeadingContent">
                                <span class="curatedCollectionsBlockHeadingContentCollection">${NFTs.collectionName}</span>
                                <h3 class="curatedCollectionsBlockHeadingContentCollectionHeading">${NFTs.NFTsName}</h3>                                
                                <p class="curatedCollectionsBlockHeadingContentCollectionAmountOfNFT">${NFTs.amountNFTs} NFTs</p>
                                <a href="#" class="curatedCollectionsBlockHeadingContentAuthor">${NFTs.author}</a>
                            </div>                        
                        </div>
                        <div class="curatedCollectionsBlockContentBlockLine">
                            <div class="curatedCollectionsBlockContentBlock">
                                <div class="curatedCollectionsBlockContentBlockCollection">
                                    <div class="curatedCollectionsBlockContentBlockCollectionHeading">
                                        <div class="curatedCollectionsBlockContentBlockCollectionHeadingImg"><img src="${NFTs.collectionImg}" class="curatedCollectionsBlockContentBlockCollectionHeadingImg"></div>
                                        <p class="curatedCollectionsBlockContentBlockCollectionHeadingP">${NFTs.collectionName}</p>
                                    </div>
                                    <p class="curatedCollectionsBlockContentBlockCollectionP">${NFTs.collectionName}</p>
                                </div>
                                <div class="curatedCollectionsBlockContentBlockInfo">
                                    <p class="curatedCollectionsBlockContentBlockInfoAuthor">${NFTs.author}</p>
                                    <div class="curatedCollectionsBlockContentBlockInfoPriceBlock">
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockReserve">Buy Now</p>
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockETH">${NFTs.price} ETH</p>
                                    </div>
                                </div>
                            </div>
                            <div class="curatedCollectionsBlockContentBlock">
                                <div class="curatedCollectionsBlockContentBlockCollection">
                                    <div class="curatedCollectionsBlockContentBlockCollectionHeading">
                                        <div class="curatedCollectionsBlockContentBlockCollectionHeadingImg"><img src="${NFTs.collectionImg}" class="curatedCollectionsBlockContentBlockCollectionHeadingImg"></div>
                                        <p class="curatedCollectionsBlockContentBlockCollectionHeadingP">${NFTs.collectionName}</p>
                                    </div>
                                    <p class="curatedCollectionsBlockContentBlockCollectionP">${NFTs.collectionName}</p>
                                </div>
                                <div class="curatedCollectionsBlockContentBlockInfo">
                                    <p class="curatedCollectionsBlockContentBlockInfoAuthor">${NFTs.author}</p>
                                    <div class="curatedCollectionsBlockContentBlockInfoPriceBlock">
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockReserve">Buy Now</p>
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockETH">${NFTs.price} ETH</p>
                                    </div>
                                </div>
                            </div>
                            <div class="curatedCollectionsBlockContentBlock">
                                <div class="curatedCollectionsBlockContentBlockCollection">
                                    <div class="curatedCollectionsBlockContentBlockCollectionHeading">
                                        <div class="curatedCollectionsBlockContentBlockCollectionHeadingImg"><img src="${NFTs.collectionImg}" class="curatedCollectionsBlockContentBlockCollectionHeadingImg"></div>
                                        <p class="curatedCollectionsBlockContentBlockCollectionHeadingP">${NFTs.collectionName}</p>
                                    </div>
                                    <p class="curatedCollectionsBlockContentBlockCollectionP">${NFTs.collectionName}</p>
                                </div>
                                <div class="curatedCollectionsBlockContentBlockInfo">
                                    <p class="curatedCollectionsBlockContentBlockInfoAuthor">${NFTs.author}</p>
                                    <div class="curatedCollectionsBlockContentBlockInfoPriceBlock">
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockReserve">Buy Now</p>
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockETH">${NFTs.price} ETH</p>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="curatedCollectionsBlock">
                        <div class="curatedCollectionsBlockHeading">
                            <div class="curatedCollectionsBlockHeadingProfileImgBlock">
                                <div class="curatedCollectionsBlockHeadingProfileImg">
                                    <img src="${NFTs.collectionImg}">
                                </div>
                            </div>
                            <div class="curatedCollectionsBlockHeadingContent">
                                <span class="curatedCollectionsBlockHeadingContentCollection">${NFTs.collectionName}</span>
                                <h3 class="curatedCollectionsBlockHeadingContentCollectionHeading">${NFTs.NFTsName}</h3>                                
                                <p class="curatedCollectionsBlockHeadingContentCollectionAmountOfNFT">${NFTs.amountNFTs} NFTs</p>
                                <a href="#" class="curatedCollectionsBlockHeadingContentAuthor">${NFTs.author}</a>
                            </div>                        
                        </div>
                        <div class="curatedCollectionsBlockContentBlockLine">
                            <div class="curatedCollectionsBlockContentBlock">
                                <div class="curatedCollectionsBlockContentBlockCollection">
                                    <div class="curatedCollectionsBlockContentBlockCollectionHeading">
                                        <div class="curatedCollectionsBlockContentBlockCollectionHeadingImg"><img src="${NFTs.collectionImg}" class="curatedCollectionsBlockContentBlockCollectionHeadingImg"></div>
                                        <p class="curatedCollectionsBlockContentBlockCollectionHeadingP">${NFTs.collectionName}</p>
                                    </div>
                                    <p class="curatedCollectionsBlockContentBlockCollectionP">${NFTs.collectionName}</p>
                                </div>
                                <div class="curatedCollectionsBlockContentBlockInfo">
                                    <p class="curatedCollectionsBlockContentBlockInfoAuthor">${NFTs.author}</p>
                                    <div class="curatedCollectionsBlockContentBlockInfoPriceBlock">
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockReserve">Buy Now</p>
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockETH">${NFTs.price} ETH</p>
                                    </div>
                                </div>
                            </div>
                            <div class="curatedCollectionsBlockContentBlock">
                                <div class="curatedCollectionsBlockContentBlockCollection">
                                    <div class="curatedCollectionsBlockContentBlockCollectionHeading">
                                        <div class="curatedCollectionsBlockContentBlockCollectionHeadingImg"><img src="${NFTs.collectionImg}" class="curatedCollectionsBlockContentBlockCollectionHeadingImg"></div>
                                        <p class="curatedCollectionsBlockContentBlockCollectionHeadingP">${NFTs.collectionName}</p>
                                    </div>
                                    <p class="curatedCollectionsBlockContentBlockCollectionP">${NFTs.collectionName}</p>
                                </div>
                                <div class="curatedCollectionsBlockContentBlockInfo">
                                    <p class="curatedCollectionsBlockContentBlockInfoAuthor">${NFTs.author}</p>
                                    <div class="curatedCollectionsBlockContentBlockInfoPriceBlock">
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockReserve">Buy Now</p>
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockETH">${NFTs.price} ETH</p>
                                    </div>
                                </div>
                            </div>
                            <div class="curatedCollectionsBlockContentBlock">
                                <div class="curatedCollectionsBlockContentBlockCollection">
                                    <div class="curatedCollectionsBlockContentBlockCollectionHeading">
                                        <div class="curatedCollectionsBlockContentBlockCollectionHeadingImg"><img src="${NFTs.collectionImg}" class="curatedCollectionsBlockContentBlockCollectionHeadingImg"></div>
                                        <p class="curatedCollectionsBlockContentBlockCollectionHeadingP">${NFTs.collectionName}</p>
                                    </div>
                                    <p class="curatedCollectionsBlockContentBlockCollectionP">${NFTs.collectionName}</p>
                                </div>
                                <div class="curatedCollectionsBlockContentBlockInfo">
                                    <p class="curatedCollectionsBlockContentBlockInfoAuthor">${NFTs.author}</p>
                                    <div class="curatedCollectionsBlockContentBlockInfoPriceBlock">
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockReserve">Buy Now</p>
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockETH">${NFTs.price} ETH</p>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="curatedCollectionsBlock">
                        <div class="curatedCollectionsBlockHeading">
                            <div class="curatedCollectionsBlockHeadingProfileImgBlock">
                                <div class="curatedCollectionsBlockHeadingProfileImg">
                                    <img src="${NFTs.collectionImg}">
                                </div>
                            </div>
                            <div class="curatedCollectionsBlockHeadingContent">
                                <span class="curatedCollectionsBlockHeadingContentCollection">${NFTs.collectionName}</span>
                                <h3 class="curatedCollectionsBlockHeadingContentCollectionHeading">${NFTs.NFTsName}</h3>                                
                                <p class="curatedCollectionsBlockHeadingContentCollectionAmountOfNFT">${NFTs.amountNFTs} NFTs</p>
                                <a href="#" class="curatedCollectionsBlockHeadingContentAuthor">${NFTs.author}</a>
                            </div>                        
                        </div>
                        <div class="curatedCollectionsBlockContentBlockLine">
                            <div class="curatedCollectionsBlockContentBlock">
                                <div class="curatedCollectionsBlockContentBlockCollection">
                                    <div class="curatedCollectionsBlockContentBlockCollectionHeading">
                                        <div class="curatedCollectionsBlockContentBlockCollectionHeadingImg"><img src="${NFTs.collectionImg}" class="curatedCollectionsBlockContentBlockCollectionHeadingImg"></div>
                                        <p class="curatedCollectionsBlockContentBlockCollectionHeadingP">${NFTs.collectionName}</p>
                                    </div>
                                    <p class="curatedCollectionsBlockContentBlockCollectionP">${NFTs.collectionName}</p>
                                </div>
                                <div class="curatedCollectionsBlockContentBlockInfo">
                                    <p class="curatedCollectionsBlockContentBlockInfoAuthor">${NFTs.author}</p>
                                    <div class="curatedCollectionsBlockContentBlockInfoPriceBlock">
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockReserve">Buy Now</p>
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockETH">${NFTs.price} ETH</p>
                                    </div>
                                </div>
                            </div>
                            <div class="curatedCollectionsBlockContentBlock">
                                <div class="curatedCollectionsBlockContentBlockCollection">
                                    <div class="curatedCollectionsBlockContentBlockCollectionHeading">
                                        <div class="curatedCollectionsBlockContentBlockCollectionHeadingImg"><img src="${NFTs.collectionImg}" class="curatedCollectionsBlockContentBlockCollectionHeadingImg"></div>
                                        <p class="curatedCollectionsBlockContentBlockCollectionHeadingP">${NFTs.collectionName}</p>
                                    </div>
                                    <p class="curatedCollectionsBlockContentBlockCollectionP">${NFTs.collectionName}</p>
                                </div>
                                <div class="curatedCollectionsBlockContentBlockInfo">
                                    <p class="curatedCollectionsBlockContentBlockInfoAuthor">${NFTs.author}</p>
                                    <div class="curatedCollectionsBlockContentBlockInfoPriceBlock">
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockReserve">Buy Now</p>
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockETH">${NFTs.price} ETH</p>
                                    </div>
                                </div>
                            </div>
                            <div class="curatedCollectionsBlockContentBlock">
                                <div class="curatedCollectionsBlockContentBlockCollection">
                                    <div class="curatedCollectionsBlockContentBlockCollectionHeading">
                                        <div class="curatedCollectionsBlockContentBlockCollectionHeadingImg"><img src="${NFTs.collectionImg}" class="curatedCollectionsBlockContentBlockCollectionHeadingImg"></div>
                                        <p class="curatedCollectionsBlockContentBlockCollectionHeadingP">${NFTs.collectionName}</p>
                                    </div>
                                    <p class="curatedCollectionsBlockContentBlockCollectionP">${NFTs.collectionName}</p>
                                </div>
                                <div class="curatedCollectionsBlockContentBlockInfo">
                                    <p class="curatedCollectionsBlockContentBlockInfoAuthor">${NFTs.author}</p>
                                    <div class="curatedCollectionsBlockContentBlockInfoPriceBlock">
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockReserve">Buy Now</p>
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockETH">${NFTs.price} ETH</p>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="curatedCollectionsBlock">
                        <div class="curatedCollectionsBlockHeading">
                            <div class="curatedCollectionsBlockHeadingProfileImgBlock">
                                <div class="curatedCollectionsBlockHeadingProfileImg">
                                    <img src="${NFTs.collectionImg}">
                                </div>
                            </div>
                            <div class="curatedCollectionsBlockHeadingContent">
                                <span class="curatedCollectionsBlockHeadingContentCollection">${NFTs.collectionName}</span>
                                <h3 class="curatedCollectionsBlockHeadingContentCollectionHeading">${NFTs.NFTsName}</h3>                                
                                <p class="curatedCollectionsBlockHeadingContentCollectionAmountOfNFT">${NFTs.amountNFTs} NFTs</p>
                                <a href="#" class="curatedCollectionsBlockHeadingContentAuthor">${NFTs.author}</a>
                            </div>                        
                        </div>
                        <div class="curatedCollectionsBlockContentBlockLine">
                            <div class="curatedCollectionsBlockContentBlock">
                                <div class="curatedCollectionsBlockContentBlockCollection">
                                    <div class="curatedCollectionsBlockContentBlockCollectionHeading">
                                        <div class="curatedCollectionsBlockContentBlockCollectionHeadingImg"><img src="${NFTs.collectionImg}" class="curatedCollectionsBlockContentBlockCollectionHeadingImg"></div>
                                        <p class="curatedCollectionsBlockContentBlockCollectionHeadingP">${NFTs.collectionName}</p>
                                    </div>
                                    <p class="curatedCollectionsBlockContentBlockCollectionP">${NFTs.collectionName}</p>
                                </div>
                                <div class="curatedCollectionsBlockContentBlockInfo">
                                    <p class="curatedCollectionsBlockContentBlockInfoAuthor">${NFTs.author}</p>
                                    <div class="curatedCollectionsBlockContentBlockInfoPriceBlock">
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockReserve">Buy Now</p>
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockETH">${NFTs.price} ETH</p>
                                    </div>
                                </div>
                            </div>
                            <div class="curatedCollectionsBlockContentBlock">
                                <div class="curatedCollectionsBlockContentBlockCollection">
                                    <div class="curatedCollectionsBlockContentBlockCollectionHeading">
                                        <div class="curatedCollectionsBlockContentBlockCollectionHeadingImg"><img src="${NFTs.collectionImg}" class="curatedCollectionsBlockContentBlockCollectionHeadingImg"></div>
                                        <p class="curatedCollectionsBlockContentBlockCollectionHeadingP">${NFTs.collectionName}</p>
                                    </div>
                                    <p class="curatedCollectionsBlockContentBlockCollectionP">${NFTs.collectionName}</p>
                                </div>
                                <div class="curatedCollectionsBlockContentBlockInfo">
                                    <p class="curatedCollectionsBlockContentBlockInfoAuthor">${NFTs.author}</p>
                                    <div class="curatedCollectionsBlockContentBlockInfoPriceBlock">
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockReserve">Buy Now</p>
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockETH">${NFTs.price} ETH</p>
                                    </div>
                                </div>
                            </div>
                            <div class="curatedCollectionsBlockContentBlock">
                                <div class="curatedCollectionsBlockContentBlockCollection">
                                    <div class="curatedCollectionsBlockContentBlockCollectionHeading">
                                        <div class="curatedCollectionsBlockContentBlockCollectionHeadingImg"><img src="${NFTs.collectionImg}" class="curatedCollectionsBlockContentBlockCollectionHeadingImg"></div>
                                        <p class="curatedCollectionsBlockContentBlockCollectionHeadingP">${NFTs.collectionName}</p>
                                    </div>
                                    <p class="curatedCollectionsBlockContentBlockCollectionP">${NFTs.collectionName}</p>
                                </div>
                                <div class="curatedCollectionsBlockContentBlockInfo">
                                    <p class="curatedCollectionsBlockContentBlockInfoAuthor">${NFTs.author}</p>
                                    <div class="curatedCollectionsBlockContentBlockInfoPriceBlock">
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockReserve">Buy Now</p>
                                        <p class="curatedCollectionsBlockContentBlockInfoPriceBlockETH">${NFTs.price} ETH</p>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                    </div>
`;

