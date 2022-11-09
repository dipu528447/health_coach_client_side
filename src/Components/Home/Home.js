import React from 'react';
import 'tw-elements';
const Home = () => {
    return (
        <div>
            {/* <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                    <img
                        src="data:image/jpeg;base64,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"
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                    <img
                        src="data:image/jpeg;base64,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"
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                    <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISFRgVEhUSGBgZGBgZGBgaERUSGBgaGBgZGRoZGBgcIy4lHB4rHxgYJzgmLC8xNjY1HCQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJCs3NTYxPzUxNDQ0NDc0MTU1NDU0NDUxOjQ0NDQ0NDQ3NDQ0NDQ0NDo0NDQxNDQ0NDE0NP/AABEIAK0BJAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBQYEB//EAEEQAAIBAgQDBgMGAwYFBQAAAAECEQADBBIhMQVBUQYTImFxgTJSkRRCkqHB0aKx8AcWI2JygjOTwtLxFWOy4eL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAnEQACAgICAQQCAgMAAAAAAAAAAQIRAyESMUEEE2GBIlEy8SNxof/aAAwDAQACEQMRAD8AubiU/JpUjprTwleieaiFFqUCnKlOigZGZpyk0pFOAoASaJp2WgLQAZqA1KRQBQAZqM1LFEUhjC1JNOigLTEGagNSkUgWgBc1AaliiKQwz0Z6Ioy0BscHp2amRRFAyTMKJFMiiKKAfNFMilAooB1AIphFAFFASAilkVHFAFFASSKSRTYpCtAEkilFRAVIopDHRRFIBTopAJFFLFFAHAwp4FEa06KsgaFp0UsUsUh0RkUoFLFOAoAbFLFOilAosBhFAFPIpQKLHQ0CkIqSKSKVgRRSgU6KUCmIYRQBTyKUCgdDQKIp8URSsBkUoFLFLQA2KWKdRQA2KIp1FADYpYpYoigBsURTooigBIoinRRFADYoinRRFADQKkAoC1IFpNjSGRSxTgKltWsxpNjSOeRRUOMSHIoqqQiECngUgFPApkiAU6KAKZiLy21LuYVRJNHfQdLYEU8Cqn+8GG+dvwN+1TYbilq82RGJJ3lSsgchNU8cltpkLLB6TR2KubUkgchMadT/ADoQKfhcn0cGq3jvE2sZVVA2dWmSdI05etZ3hPEmw+bKgbNlmZERPT1rSOFyjyX0ZTzxjJRf2bZCdjuPzHI/1zBqSorzZYbnIEdcxAgfz9qcHPyt/D+9YtHQmPiiKQPrBBE7TH00NOpDGxRSxTbjqilmMAAknoBQAppaqv7wYb52/wCW37VPg+LWbrZEYloJgqVmN4mreOSVtMhZYN0mjuopaKzNBIpYptxwoLMYABJPQCqz+8OG+ZvwN+1XGMpfxVkSnCP8nRaxRFcOE4vYutkRiWMkAqyzHSa7hHUVMouOmhxlGSuLsIoipktqfvflUowZPwsD+VTyRfFnJFEVNdsshhhH8vrTVtk7A0WFDIoipvs7/Kf50yKLChkURTopQKAGhaeFpQKdFFhQ0LTgKciE7VMLVKx0c9WWCtws9arMSkc6s8Ni7cABhSmnWiotXsLmFBMxS10hh1orPky+KMsop8U1adXQcyCsv2px8kWVOiwX825D2Bn/AMVqaxnaLAm3cLj4bksPJvvD9ffyro9Moue/o5/VOShr7O3st2ct4xLjvdKlDAAy6eGczT93ly2OtUFm6bbBlOqnQjYwf5Vv+E47h9izaVLtkGVN8sCWcFGzAmNfERptArJ9pVw5vk4QqUcKYUEBXOhAHLkY861w5ZSySUk6fVr9GGXFGOOMotWu6ZqsLfW9bDL94R6GINcvB+EfZ83jLZsv3MsRPmetLwrhq27ahxJ3PiI315GupLFtth/E499Tt51zylVxi9HVGPKpSWxVGd833VkL5tsx9tvrUjuAQvMz5wBuT5bD1IpmH8JKHlqvmpP6HT6dazKrib2KJGdCrRMEBEB89DP5k0ow5XukhzycUqVts1RWZE9IPQ7/AJaUqNI89j5Gl0Ua7DUn8yTUNlMwLtmGbUDMywvKYO8b1maE1ZrtVj9rKnoz/wA1X9fpV7ZuWrk924aN8t0tHrBrK9o8EbdzOJyvrO+vMTW/p4rn+Rz+pk/b/EtezvZH7TZ7x3ZC2bIABqo0BM9Wn2FUvFMG+DxBVSfCQyMeanVSfbQ+hrc9nu0+FFpEd1tlUVSG0gqIIB5gxIjrWX7Z8Us4q6ncyQqkFspGYs0gAHXT9avDkzSzOM0+O/ozy48Swpxa5a/2zQYLFLdRXXZhqOh5j2NT1WcEwHd2gGmW8RAZhv6H0qW3ila81nLcBVQ2bO+UzHn5/kawlFcnXSOqEnxV9sqe1WPgCyp3hn9Pur77/SqPD21PxLOnzEbweVd/aXAm3cziSr8ySYPSTXHhVJ2BOg5TyArvxKKxriebmbeV8iDMbbBkJBU6HzH/AJq/bi4uAMpgtuPljQj61QYnf3P6ftXLcssHyhmXKZbKdS50MHoBA9jRlx80v2PBl9tu+jVJxC4OdX3CuLqR4jEbn9a85vYfEETbvMJ0ys2jeh5etTcI4q6rF4FWXwsTswOxJ/rauPJg49noYs0Z7ietHELOR4IOx5fWqj/1AM5XDB7oG7KPCp6Fjp+dU2Be5jMlmSEEszg+LIDEA9STA9GPKtrhcMltAiKFUCAAIArlaUTo3Ir7H2hZm1oTMB0JB8hP61Ndh9QpVx8SEFWI+YDn6iRVhSOgYQ3qCNCp6g8jWfIuimIoArsvWpOsSDDQIBnUMB5j8wadbsitOWiOJzJaJrpTDV1IlShahyLUSBLQFBt10RRFLkOisxOFLVxNgWB0q/y0FBVRyNEvGmUyI0bmirF7Ymlp8hcWUC06mrTwK1MkFV/HLSNZfOYAEgxJDDaBzmY96sIrM8bxIvX7eHBITOiuR8zEDT0BPufKtMUXyv8AWzLNJKLvzooe7t/O3/L/AP1VpwCxaN5ZckgEgFMsn6ma67CcPe24Nt0KOAWa7EsxaAHVSYyo2mXlVVjMI+GdXXVSc1tgZBGhAJgQ0ESI5+ldvuc7jtP5ODjwalpr4Lvjt5+/tILjIrZQxBgAM+UsfQUnaIPZRXVsRbbMyZXuhy6qJFxY2E+2uldlvD2MWiXLiycuX42WNdRAPWaVuA4U7ox5a3HOnTeuXkk0n4712dThKVtPvrfRPirwS2txjqoUzzMgZh7ifyqv/vPa+R/rVf2hxZuOti3JCkKANczGAAOvKui32NxGVWuvZtFiFVWfxFjsugiT0k1ajjjFPI6vomU8spOONXXZ24bjFvEOqAFZMmfvRsv1in8dx161kFpM2YPm8DPEZY223NZ/inBsRgmVrigCfC6mVJGsTuD5GK1fDsYL1sODqRDa7HnSnGEanDaHCU5XCWmY3hWNu2ixtJmJAnwM8RMbbVruK4ZbtrK25jLprmMRFM4Xwq3hyxR2OYAGY5SdI9a608b5uSyF8zsze231qcuROXKK6KxYpKPGT78GZ/uvc+dPp/8AdT4PgJtuj3WBWY0HM7Tr109xV7jcWLYGmZ20RBux/QdTypMNh2yHvTmdhDQTlHQKOUTv119B58jjtiXp8aeltC/aHzMDauQCIYFCG03AJBFV/DOKd493vEZIIEkMQI0ysY8J3OvU1aYdzBDfEuh8+je4/Wls2whc5iczZtSNNAIHlCis01TTRs0200zi4obV3DsxYFIkMNdQeXvWNUINrrj0tkf9VXHabHAkWbcQvxRoJ6VqMN2PwSoouZnaAWcOVE6aQDCg8v51vHLHBFcr30c08cs82oVrswdlUBLI5ZlUlQUy6jnMmSBJjyrn4BgHxWIFpNC2rNvlUfEx/rcitP2z4FZwipew5IGbKVLFoMEhgTryiKxeD47cwN4X7GQSpGVhmUgxmUwQdCAR7Vp73PG5Q+rJhg4z4z+6Nn2t4UuEdWDqUKhUtxDjKOfzLJJLdTFZDGgMNsxP6855dZrl4nx2/i3N/EBgSABCsEVRsF6DUn3NXPCLC3LLOSCXDKmswAd/fT6UoTrFU3bocsH+a4KlZtOw1gLbOgkLaWY5d0rn+K49aqsb2LxvhCNoxUL/AL0kR7plj/Q3StkDXmTX5HqQ6ClpKWoLIbzeMD5kb+B0j/5n609Fris3u8xJC7W0yk/5mIYj2hfzqzZaHrQlvYgpy02nLSGFFFFAwoNFKBQBzupmiumKKfIVGVLACSYA1J6AVieIcVuXXZke4q7KA7LoNiQDud60PaM3BYOTaRn65f8AzE1QDhSllVcRhzmCk/4hWC3IyI09a9T06jFXI8j1MpN8Yk/EsHicPbtXGvsRdEgLeckaA6666GuSxeC3Ld5pgOheNSCrBiR6gT6zVz2k7PXbTW0tzdAtqsKPECCZJWSYJJM/tVPw/CM9w2iCJkMCIKkc46g/rWuOUZQu15+NGOSMlPjT8fOzpbDoyXFtXrblnR/Ee4gAXZ/4kT8Q2pmIRhYW2zozm7Kqt5bsLkC/dJyia7h2XPzj6V1YDga2HVnbMJgaaBjtNRziunfno0WKb7VeOzu4dw5LVsKyqxAkyAdTrzroS1bJIyKI/wAq1NfMKx6Kx+gNVHBMU9x2zEf8O20AQAWmY/KuXck5HZ+MWopFdxK0cJiEvoqsuYMFYArI3Gu3PXlvVlj+3l1yO6s2woIIzgu0jnoQFP1qfjwt9y3ebco3nyrGxa63PwJ/3V044QyxUpq2tHJlnPDJxg6T2X/Hu1LYy0trulVi0sZDaj4ckiRPP6azVpwvhyW7YDqpO7EidT61neBLZ75ZLk/dzKoE8tia1uOxItIztso9zyA+prPLFQrHBUjTC3O8k3b6D7Pb+RPwCiwMrZOR1T3Oq+xP0PlVbw/jVu66qqFJkaleQnlVji/hEfFmGT/V+0TPlNYuMoumdEZRkrRK+FCuSyjMPDPMDoPKnMwAk7Coi106kW/xN+1V/G2vCy8BeU5SSY50oxtpNhOSim0jN8X4k9y4SrMFGghiNB6Vypcun79yOuZ4671Nw3DywZlJWGK6GGZQSq6byY0G9WD3AygF1eUdmAQJ3RCuR4gOZhenLcg16LcY1FI8upSuTfZUX/EMwOYiAx1108La6+R8x51vOyva5GTusSwVlXwudA6gc/8AMAPesFhfi1+GDn/08/0jziiLXW5+BP8Auoz4I5I1L6+CsOaWOXKP38ll2x7RNjGCqCLanwLzY7ZmHU8hy96dwvg9u2F7xVZpzHN4gG8gdNKqcA9oXQSXnXLIAE8tj/RqzvYs7iufIlCKhFUjtwXJucnbZu8O9sgAhfoK4sZ2Zw9yWtjunOua3CyerL8Le4msthuNXCB8wAB8yAAT771o+G8YzL4jB/o1xtNbR2JopMRwjFYR87qHtjd7ZKRBkMy6lCDqGEgSZ0rQ8N7Rq3hcEkblVk/7rY8Q9VlTV3hMSHHWq7Hdn7NyGVE8hlAj/QRt6VNp6kVX6Ok8ZsASXUeuYH6RNV+N44XWLAYAyO9ZYAjfIp+JtecU9fs9pIYIx28Wp9JOtUJ4phw1ywbiBrkXLKzJF1fAyQNiwUHXcmhRS3RLci+7PuE8IB8yWkknUljzJrREiKwfCMc0ghCQemtbSw5KyelLLHdlweqJFNSCokqWs2UgoFITT1FIYlKKQ0opALRRRQMybIGBDCQQQR1B5VhuI8Pe07IFYj7pCkyp2258vat2tPBr0cWV42zzsuFZEYLGXrlxxcCOrAKBlDyMiBQQdwfCK0vA8J3VtrjyXYFmJ1aN9zuf651cA1EyDVDswMe+4/Offypzzco8UqRMMHF8m7ZEUZyxi4vhAUZ8uvik+Fv9O9Sqc4yOrA5RM5fSQQTrIqIsyFv+I0qMumbxeKdh/pqVEyjMSxOUDUj6CB1NZM2X9iLcBUpcIkSraxMjceoIPv5VHhMNZtEm2QCVVdXnRNtz510osDXc6n1/rT2p1Ll2kHHyzH9pMf3j5FPhT8zXTgeCv3ascJcvZoYMLptLlYAgCCZ3PIVF2o4fkbvVHhfRvJuvv/MGra12mwzWLNq4LoNsWzKMySyRoco1Ej+jXVJy9uPtq/2cSjF5Ze46fgz3F8C2HdWyNazSyo2pXLHOTm1O/rWlwmIt4qyO8ynbMpMaiqntTxZcdctd0rSAVg8yxEchWg4fhFsoqLy3PVjuaWST9tOWpF4Yr3Gou0QW+H4VCGVbYKmR49j13rpteNi/ISqf9Tfp6DzqeoxoY5HUevMfr9a5nJvs6lBR6OfG2HuD/DfIyNKnWCwGzCdV1iulSHWD6MIMTzAneubF3ihXLm8TLmhGcBdZbQaHQftXUrALOsRPOdf1/eh3SBVbMVxbC3bb5BnKA5kABIEnlG1c165fcZWFwjn4CMxGstA8R8zNb62CNTudT+3tT5roXqaStWc0vSW206POXGRcv3jBbqB91f1Pt0pqo2UsiudQPCrHmCdvL+dX/arAQReUaGA/ryb32+lXfZvtNgcLh1R2ZWEl/wDDdpc7mVGvKPICtp52salCNtmEMEfdcZOkv+nl+IkMQ2ZSDPwkEcx6cq7heu3EzW1Vj96TABHXy51Z9uOIYXF4hbmGzlioVzkZczAwsAwZjQn06VZYDg6pbCDnq2kSefrWOSfKCclTOzFHjJxi7RT8AR2MuZM8hCgDoP3rRWsIt2867AAARpEDU/Uml4fw0BoUacz+gqx4VbhrjnbMR9K5mzqRy2r97CvBOdRuROnr0rSYHiVtxmVhruvQ1n8fcZUAGr3Dt5HYU21YCOFjUDU8yedTKKkhp0dHHuHi7cfIYmDI5NAkj3ry3tXgb+Evpfgo2YMGBKgusaqy6iYHOd69lw1sRXN2m4KuLw1yyVBbKWtn5XUEqR06ehNS3qh15KvspetYoG7aDEZiPhjKYDFdSSIzR6AVtQsLFeXf2T8RUK1hgodGMyIJVjKsT1DZl/3oOVem2rmZiKmVsI60TxApxNRXW1p06VFFioKlFRqKkqWNDTSrSGhaAHUUUUDMotPpgp1dZxjqa6yPzB6GloNAyOG6r+E/vT1QyJIMbaRr13opwosKFopKKQyLF4dbiMj7MI8x0I8xVP8A3XtfPc/g/ar2lrSOSUVUWZyxRk7krKvh/A7dl84Z2IBAzZYE8xA3/erSiiplKUncmVGMYqoqgprrIj6eRGxpaKkoSG+ZfwH96ApkZiCBrAEfrSzS0BQtFIaKQDMRZW4jIwkMINUF/sxaCnx3Nj8n7VoaHEg1pGco6TM5Y4ydtGM4Xwi3buhpdiOpUBT123rXYe2pGn1OunWs5cOV9dgdv3q/wF2Rr7/tRklKW2aQio9Fnasqo0Ggrmt2IRV+clj6bn9K7k1Ecz+XWmY5CfCuhbwg/Ko3P9eVYWbUVeGtd5ca6fhWVT15n9KL1qHDVai2qKEUaAQKhupVJktEuF1ruUVX4Y1YIazkUjyPtNY/9M4oLw8Nq/4iQPhDEB4jmrgP7CvUOF4jPDdRrrOoMEfUGqD+0zg/2rBsyjx2T3i9SoHjH01/2iqj+zbjfe2wjnxoIPU5YA/hye6saqO1RL0z0J21pUfWomeajDb0qKssUaakquw1/WDXeDUSjTKi7CgUCkqQH0UlFBRlRS0wUs12HGPFKaYDSk0hoKeKjmnCgB1FNpZoAWaBSUTQMWikopAH9b0pptFMQ6im0tIYoNE0k0poAKDQKQmgDPcWTK5MefOp+G4vQbfnXTxazmWen8qobDlWgVfaGjd4RwfpXSd557egqm4dfAAk61a55rCSpmiehGNRNT3NQvcjr/M00DBNGqxtSRpVfhkLyYKgcyCParS1oNKUgiQsZEMJB0I614vcVuE8SZQPAWDJvqjar/Nl+te3OoavPP7UuC97YF9B4rMz52zv9DB9zTixSRtbN1XUMpBVgCD1BEinnasZ/Zvxrv7HdMfHb26lSf0J/iFbM7U2tkp6I0OtWNh5FVq114ZqUloqLOzNSzUc00vWVGlk00VD3lFFBZmhSzTZomuo5R80E02aCaAFBp4qKaeDQUOpZpk0s0gHTRTZomgB1E02aCaAFmlmmTSzQA6aKbNE0AOmlpk0uagBwppNBNcHFccti09xtkWffkPrQgK3i3GgMRbwybsGd/JQpIFc+KSDIrzvBcay4tcRcMyxzeQYFdPSfyr0B8UpAggg7a6a9DTi7Hxo6cBiitaPC4qedZGzJOmUerqP1q54bcKnxkEeWpokrKNGADzqa2pGyadTpXBZ4wg0ykAbmI/nVhhMWl6SglOTHZjOuXy86ydopUdbfDtRZ1qVFG3UVEFymKz+CgcRXFxC2roVYAgggjqCII+lWFyuO7VRZMkeK4Rn4VxDLrlzDL/ntvt+RI9R5V7IlxXUMplWAIPUHUVhf7Q+B99Z7xB47UsOrJuy+2/161L/AGdcdF+x3TMMyGN/Ux76kejdK1ZBtUros71Bbrotb1Eiok01HdOlPJplzaoRTIe8NFMmiroi2X32dPlT8Io+zp8qfhFT0VyWzqpEH2dPlT8Ipfs6fKv4RU1FFsKRB9mT5U/CKX7Onyr+EVNRRbCkQ/Z0+Vfwij7Onyr+EVNRRbCkQ/Z0+Vfwij7Onyr+EVNRRbCkQ/Z0+Vfwij7Onyr+EVNRRbCkVeNxVi0cpUFhkJUISQr3AgOgPMmBuYMVC/EsKACAGzMFAWyzmSbY1AEiO8SfXrpXdiMDbdldwSVjL42AEEMIWYmVGvlXMnBsONQhB8O1y4PvIZGuhlE155RNO2FI57XF8GwXUKzKHCtaYPDGB4YmSToBvuNKkPEsNIGXfP4u4bLNtlVhOXfMwA6nTeAelOFWV2Dfd07y5HgYMumaNCBHQCNtKa3CLBMlWkksT3tyZbLJmf8A20jplERFK2FI534phQVgKQz5CchAVsjOF1Gr+EDIPFLDSui/icOhIYCQFkC0zfEYUeFT4jyXfypo4Lh4jIYmY7y5GbKUzxPxQfi3nWZ1qW9wy05JYPJiSLtxT4TmU6NuDz3jTbSi2FIgs4/CuwRCpLfDFtsp0J0aMvI8+UU7Evh8qkorq1wW9EV1DF8ninSA+h5zUtnhllYyoBlMrBbSJjn5n61NjMKl1QHzQGVhDuniUgqZUgmCAfanbCkUdnFYJxKYVWGZUJFmwYLZQs+LQnOPD8Q1kCpkxFjb7IwGcoP8PDkZlWYGVjOoYabFTMDWrF+GWpVobMrM4IuXF8TfETDa6aazA020pj8Ks+Ew/gVlAF24ogmWkBoJPMmTSGcFrE2HyhcKTmLqP8Ox8SFwyzmj7h121GsmKE4nZASMPcHeCbYCWfF4lAAho2ZTJ0jnOldq8HsgkgXJKlD/AI97UNJafFqSWOu+2ugh13hVksWIaWygxduKAE1TKoaFIPMAU7YqJMOLV1FYIsMAYZFkTyI610C0o2VR7Ci1aVAqKIUCAOgG1S0rChuUdB9KCg6D6U6igY3KOg+lN7tflX6CpKKAIWw6HdVP+0VFa4fYQytq0p6i2in8hXXRTsVEfdL8q/hFL3a/KPoKdRSGNyL0H0FHdr0H0FPooAj7pflX6CipKKLFR//Z"
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div> */}
        </div>
    );
};

export default Home;