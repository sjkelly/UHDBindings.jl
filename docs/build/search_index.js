var documenterSearchIndex = {"docs":
[{"location":"base/#Common-functions-1","page":"Function list","title":"Common functions","text":"","category":"section"},{"location":"base/#","page":"Function list","title":"Function list","text":"Modules = [UHD]\nPages   = [\"UHD.jl\"]\nOrder   = [:function, :type]\nDepth\t= 1","category":"page"},{"location":"base/#UHD.openUHD","page":"Function list","title":"UHD.openUHD","text":"Init the core parameter of the radio in Tx or in Rx mode and initiate RF parameters \n\n–- Syntax\n\nopen(mode,sysImage,carrierFreq,samplingRate,txGain,antenna=\"RX2\")\n\n–- Input parameters\n\nmode \t\t\t: String to open radio in \"Tx\" (transmitter) or in \"Rx\" (receive) mode\nsysImage\t  : String with the additionnal load parameters (for instance, path to the FPHGA image) [String]\ncarrierFreq\t: Desired Carrier frequency [Union{Int,Float64}] \nsamplingRate\t: Desired bandwidth [Union{Int,Float64}] \ntxGain\t\t: Desired Tx Gain [Union{Int,Float64}] \nantenna\t\t: Desired Antenna alias [String]\n\n–- Output parameters\n\nUHDTx\t\t  \t: UHD Tx or Rx object with PHY parameters [Union{UHDTx,UHDRx}]  \n\n\n\n\n\n","category":"function"},{"location":"base/#Receiver-functions-1","page":"Function list","title":"Receiver functions","text":"","category":"section"},{"location":"base/#","page":"Function list","title":"Function list","text":"Modules = [UHD]\nPages   = [\"Rx.jl\"]\nOrder   = [:function, :type]\nDepth\t= 1","category":"page"},{"location":"base/#Base.close-Tuple{UHD.UHDRx}","page":"Function list","title":"Base.close","text":"Close the USRP device (Rx mode) and release all associated objects\n\n–- Syntax\n\nclose(uhd)\n\n–- Input parameters\n\nuhd\t: UHD object [UHDRx]\n\n–- Output parameters\n\n[]\n\n\n\n\n\n","category":"method"},{"location":"base/#Base.print-Tuple{UHD.UHDRx}","page":"Function list","title":"Base.print","text":"Print the radio configuration \n\n–- Syntax\n\nprintUHD(radio)\n\n–- Input parameters\n\nradio\t\t: UHD object (Tx or Rx)\n\n–- Output parameters\n\n[]\n\n\n\n\n\n","category":"method"},{"location":"base/#UHD.getError-Tuple{UHD.UHDRx}","page":"Function list","title":"UHD.getError","text":"Returns the Error flag of the current UHD burst \n\n–- Syntax\n\nflag = getError(radio)\n\n–- Input parameters\n\nradio : UHD object [UHDRx]\n\n–- Output parameters\n\nerr\t: Error Flag [errorcodet]\n\n\n\n\n\n","category":"method"},{"location":"base/#UHD.getTimestamp-Tuple{UHD.UHDRx}","page":"Function list","title":"UHD.getTimestamp","text":"Return the timestamp of the last UHD burst \n\n–- Syntax\n\n(second,fracSecond) = getTimestamp(radio)\n\n–- Input parameters\n\nradio\t  : UHD UHD object [UHDRx]\n\n–- Output parameters\n\nsecond  : Second value for the flag [Int]\nfracSecond : Fractional second value [Float64]\n\n\n\n\n\n","category":"method"},{"location":"base/#UHD.initRxUHD-Tuple{Any}","page":"Function list","title":"UHD.initRxUHD","text":"Initiate all structures to instantiate and pilot a USRP device into Receiver mode (Rx).\n\n–- Syntax\n\nuhd\t  = initRxUHD(sysImage)\n\n–- Input parameters\n\nsysImage\t  : String with the additionnal load parameters (for instance, path to the FPHGA image) [String]\n\n–- Output parameters\n\nuhd\t\t  = UHD Rx object [UHDRxWrapper] \n\n\n\n\n\n","category":"method"},{"location":"base/#UHD.openUHDRx","page":"Function list","title":"UHD.openUHDRx","text":"Init the core parameter of the radio (Rx mode) and initiate RF parameters \n\n–- Syntax\n\nopenUHDRx(sysImage,carrierFreq,samplingRate,gain,antenna=\"TX-RX\")\n\n–- Input parameters\n\nsysImage\t  : String with the additionnal load parameters (for instance, path to the FPHGA image) [String]\ncarrierFreq\t: Desired Carrier frequency [Union{Int,Float64}] \nsamplingRate\t: Desired bandwidth [Union{Int,Float64}] \ngain\t\t: Desired Rx Gain [Union{Int,Float64}] \nantenna\t\t: Desired Antenna alias  (default \"TX-RX\") [String]\n\n–- Output parameters\n\nUHDRx\t\t  \t: UHD Rx object with PHY parameters [UHDRx]  \n\n\n\n\n\n","category":"function"},{"location":"base/#UHD.populateBuffer!","page":"Function list","title":"UHD.populateBuffer!","text":"Calling UHD function wrapper to fill a buffer \n\n–- Syntax\n\nrecv!(sig,radio,nbSamples)\n\n–- Input parameters\n\nradio\t  \t: UHD object [UHDRx]\nptr  \t\t: Writable memory position [Ref{Ptr{Cvoid}}]\nnbSamples : Number of samples to acquire \n\n–- Output parameters\n\nnbSamp \t: Number of samples fill in buffer [Csize_t]\n\n\n\n\n\n","category":"function"},{"location":"base/#UHD.recv!-Tuple{Any,UHD.UHDRx}","page":"Function list","title":"UHD.recv!","text":"Get a single buffer from the USRP device, using the Buffer structure \n\n–- Syntax\n\nrecv!(sig,radio,nbSamples)\n\n–- Input parameters\n\nsig\t  : Complex signal to populate [Array{Complex{Cfloat}}]\nradio\t  : UHD object [UHDRx]\nbuffer  : Buffer object (obtained with setBuffer(radio)) [Buffer] \n\n–- Output parameters\n\nsig\t  : baseband signal from radio [Array{Complex{Cfloat}},radio.packetSize]\n\n\n\n\n\n","category":"method"},{"location":"base/#UHD.recv-Tuple{Any,Any}","page":"Function list","title":"UHD.recv","text":"Get a single buffer from the USRP device, and create all the necessary ressources\n\n–- Syntax\n\nsig\t  = recv(radio,nbSamples)\n\n–- Input parameters\n\nradio\t  : UHD object [UHDRx]\nnbSamples : Desired number of samples [Int]\n\n–- Output parameters\n\nsig\t  : baseband signal from radio [Array{Complex{CFloat}},radio.packetSize]\n\n\n\n\n\n","category":"method"},{"location":"base/#UHD.updateCarrierFreq!-Tuple{UHD.UHDRx,Any}","page":"Function list","title":"UHD.updateCarrierFreq!","text":"Update carrier frequency of current radio device, and update radio object with the new obtained carrier frequency \n\n–- Syntax\n\nupdateCarrierFreq!(radio,carrierFreq)\n\n–- Input parameters\n\nradio\t  : UHD device [UHDRx]\ncarrierFreq\t: New desired carrier freq \n\n–- Output parameters\n\ncarrierFreq \t: Current radio carrier frequency \n\n–-\n\nv 1.0\n\n\n\n\n\n","category":"method"},{"location":"base/#UHD.updateGain!-Tuple{UHD.UHDRx,Any}","page":"Function list","title":"UHD.updateGain!","text":"Update gain of current radio device, and update radio object with the new obtained  gain\n\n–- Syntax\n\nupdateGain!(radio,gain)\n\n–- Input parameters\n\nradio\t  : UHD device [UHDRx]\ngain\t: New desired gain \n\n–- Output parameters\n\ngain \t: Current radio gain\n\n\n\n\n\n","category":"method"},{"location":"base/#UHD.updateSamplingRate!-Tuple{UHD.UHDRx,Any}","page":"Function list","title":"UHD.updateSamplingRate!","text":"Update sampling rate of current radio device, and update radio object with the new obtained sampling frequency  \n\n–- Syntax\n\nupdateSamplingRate!(radio,samplingRate)\n\n–- Input parameters\n\nradio\t  : UHD device [UHDRx]\nsamplingRate\t: New desired sampling rate \n\n–- Output parameters\n\n\n\n\n\n\n\n","category":"method"},{"location":"base/#Transmitter-functions-1","page":"Function list","title":"Transmitter functions","text":"","category":"section"},{"location":"base/#","page":"Function list","title":"Function list","text":"Modules = [UHD]\nPages   = [\"Tx.jl\"]\nOrder   = [:function, :type]\nDepth\t= 1","category":"page"},{"location":"base/#Base.close-Tuple{UHD.UHDTx}","page":"Function list","title":"Base.close","text":"Close the USRP device (Tx mode) and release all associated objects\n\n–- Syntax\n\nclose(uhd)\n\n–- Input parameters\n\nuhd\t: UHD object [UHDTx]\n\n–- Output parameters\n\n[]\n\n\n\n\n\n","category":"method"},{"location":"base/#UHD.initTxUHD-Tuple{Any}","page":"Function list","title":"UHD.initTxUHD","text":"Initiate all structures to instantiate and pilot a USRP device in Transmitter (Tx) mode.\n\n–- Syntax\n\nuhd\t  = initTxUHD(sysImage)\n\n–- Input parameters\n\nsysImage\t  : String with the additionnal load parameters (for instance, path to the FPHGA image) [String]\n\n–- Output parameters\n\nuhd\t\t  = UHD Tx object [UHDTxWrapper] \n\n\n\n\n\n","category":"method"},{"location":"base/#UHD.openUHDTx","page":"Function list","title":"UHD.openUHDTx","text":"Init the core parameter of the radio in Tx mode and initiate RF parameters \n\n–- Syntax\n\nopenUHDTx(sysImage,carrierFreq,samplingRate,gain,antenna=\"TX-RX\")\n\n–- Input parameters\n\nsysImage\t  : String with the additionnal load parameters (for instance, path to the FPHGA image) [String]\ncarrierFreq\t: Desired Carrier frequency [Union{Int,Float64}] \nsamplingRate\t: Desired bandwidth [Union{Int,Float64}] \ngain\t\t: Desired Tx Gain [Union{Int,Float64}] \nantenna\t\t: Desired Antenna alias (default \"TX-RX\") [String] \n\n–- Output parameters\n\nUHDTx\t\t  \t: UHD Tx object with PHY parameters [UHDTx]  \n\n\n\n\n\n","category":"function"},{"location":"base/#UHD.send","page":"Function list","title":"UHD.send","text":"Send a buffer though the radio device. It is possible to force a cyclic buffer send (the radio uninterruply send the same buffer) by setting the cyclic parameter to true\n\n–- Syntax\n\nsend(radio,buffer,cyclic=false)\n\n–- Input parameters\n\nradio\t  \t: UHD device [UHDRx]\nbuffer \t: Buffer to be send [Union{Array{Complex{Cfloat}},Array{Cfloat}}] \ncyclic \t: Send same buffer multiple times (default false) [Bool]\n\n–- Output parameters\n\nnbEch \t: Number of samples effectively send [Csize_t]. It corresponds to the number of complex samples sent.\n\n–-\n\nv 1.0\n\n\n\n\n\n","category":"function"},{"location":"base/#UHD.updateCarrierFreq!-Tuple{UHD.UHDTx,Any}","page":"Function list","title":"UHD.updateCarrierFreq!","text":"Update carrier frequency of current radio device, and update radio object with the new obtained carrier frequency \n\n–- Syntax\n\nupdateCarrierFreq!(radio,carrierFreq)\n\n–- Input parameters\n\nradio\t  : UHD device [UHDRx]\ncarrierFreq\t: New desired carrier freq \n\n–- Output parameters\n\ncarrierFreq \t: Current radio carrier frequency \n\n–-\n\nv 1.0\n\n\n\n\n\n","category":"method"},{"location":"base/#UHD.updateGain!-Tuple{UHD.UHDTx,Any}","page":"Function list","title":"UHD.updateGain!","text":"Update gain of current radio device, and update radio object with the new obtained  gain\n\n–- Syntax\n\nupdateGain!(radio,gain)\n\n–- Input parameters\n\nradio\t  : UHD device [UHDTx]\ngain\t: New desired gain \n\n–- Output parameters\n\nupdateGain : Current Radio gain [Float64]\n\n\n\n\n\n","category":"method"},{"location":"base/#UHD.updateSamplingRate!-Tuple{UHD.UHDTx,Any}","page":"Function list","title":"UHD.updateSamplingRate!","text":"Update sampling rate of current radio device, and update radio object with the new obtained sampling frequency  \n\n–- Syntax\n\nupdateSamplingRate!(radio,samplingRate)\n\n–- Input parameters\n\nradio\t  : UHD device [UHDTx]\nsamplingRate\t: New desired sampling rate \n\n–- Output parameters\n\n\n\n\n\n\n\n","category":"method"},{"location":"Examples/example_parameters/#Update-parameters-of-the-radio-1","page":"Update parameters of the radio","title":"Update parameters of the radio","text":"","category":"section"},{"location":"Examples/example_parameters/#","page":"Update parameters of the radio","title":"Update parameters of the radio","text":"It is possible to update the radio parameter such as the gain, the bandwidth and the sampling rate.  In this function, we change the carrier frequency to 2400MHz, the bandwidth from 16MHz to 100MHz and the Rx gain from 10 to 30dB. In some cases, the desired parameters cannot be obtained. In such a case, we let UHD decide what is the most appropriate value. A warning is raised and the output of the functions used to change the  the radio parameters corresponds to the effective values of the radio. ","category":"page"},{"location":"Examples/example_parameters/#","page":"Update parameters of the radio","title":"Update parameters of the radio","text":"function main()\n\t# ---------------------------------------------------- \n\t# --- Physical layer and RF parameters \n\t# ---------------------------------------------------- \n\tcarrierFreq\t= 868e6; \t% --- The carrier frequency (Hz)\t\n\tsamplingRate\t= 16e6;         % --- Targeted bandwidth (Hz)\n\trxGain\t\t= 30.0;         % --- Rx gain (dB)\n\tnbSamples\t= 4096;         % --- Desired number of samples\n\n\t# ---------------------------------------------------- \n\t# --- Getting all system with function calls  \n\t# ---------------------------------------------------- \n\t# --- Creating the radio resource \n\t# The first parameter is for specific parameter (FPGA bitstream, IP address)\n\tradio\t= openUHD(\"Rx\",\"\",carrierFreq,samplingRate,rxGain);\n\t# --- Display the current radio configuration\n\tprint(radio);\n\t# --- We what to change the parameters ! \n\tupdateSamplingFreq!(radio,100e6);\n\tupdateCarrierFreq!(radio,2400e6);\n\tupdateGain!(radio,30)\n\t# --- Print the new radio configuration \n\tprint(radio);\n\t# --- Release the radio resources\n\tclose(radio); \nend","category":"page"},{"location":"Examples/example_benchmark/#Benchmark-for-Rx-link-1","page":"Benchmark for Rx link","title":"Benchmark for Rx link","text":"","category":"section"},{"location":"Examples/example_benchmark/#","page":"Benchmark for Rx link","title":"Benchmark for Rx link","text":"The following script allows to benchmark the effective rate from the receiver. To do so we compute the number of samples received in a given time. The timing is measured fro the timestamp obtained from the radio. ","category":"page"},{"location":"Examples/example_benchmark/#","page":"Benchmark for Rx link","title":"Benchmark for Rx link","text":"module Benchmark \n# ---------------------------------------------------- \n# --- Modules & Utils\n# ---------------------------------------------------- \n# --- External modules \nusing UHD \n# --- Functions \n\"\"\"\nCalculate rate based on UHD timestamp\n\"\"\"\nfunction getRate(tInit,tFinal,nbSamples)\n\tsDeb = tInit.intPart + tInit.fracPart;\n\tsFin = tFinal.intPart + tFinal.fracPart; \n\ttiming = sFin - sDeb; \n\treturn nbSamples / timing;\nend\n\"\"\"\nMain call to monitor Rx rate\n\"\"\"\nfunction main(samplingRate)\t\n\t# ---------------------------------------------------- \n\t# --- Physical layer and RF parameters \n\t# ---------------------------------------------------- \n\t# --- Create the radio object in function\n\tcarrierFreq\t\t= 770e6;\t\t\n\tgain\t\t\t= 50.0; \n\tradio\t\t\t= openUHD(\"Rx\",\"\",carrierFreq,samplingRate,gain); \n\t# --- Print the configuration\n\tprint(radio);\n\t# --- Init parameters \n\t# Get the radio size for buffer pre-allocation\n\tnbSamples \t\t= radio.packetSize;\n\t# We will get complex samples from recv! method\n\tsig\t\t  = zeros(Complex{Cfloat},nbSamples); \n\t# --- Targeting 2 seconds acquisition\n\t# Init counter increment\n\tnS\t\t  = 0;\n\t# Max counter definition\n\tnbBuffer  = 2*samplingRate;\n\t# --- Timestamp init \n\tp \t\t\t= recv!(sig,radio);\n\tnS\t\t\t+= p;\n\ttimeInit  \t= Timestamp(getTimestamp(radio)...);\n\twhile true\n\t\t# --- Direct call to avoid allocation \n\t\tp = recv!(sig,radio);\n\t\t# --- Ensure packet is OK\n\t\terr \t= getError(radio);\n\t\t# --- Update counter\n\t\tnS\t\t+= p;\n\t\t# --- Interruption \n\t\tif nS > nbBuffer\n\t\t\tbreak \n\t\tend\n\tend\n\t# --- Last timeStamp and rate \n\ttimeFinal = Timestamp(getTimestamp(radio)...);\n\t# --- Getting effective rate \n\tradioRate\t  = radio.samplingRate;\n    effectiveRate = getRate(timeInit,timeFinal,nS);\n\t# --- Free all and return\n\tclose(radio);\n\treturn (radioRate,effectiveRate);\n    end\nend","category":"page"},{"location":"#UHD.jl-1","page":"Introduction to UHD","title":"UHD.jl","text":"","category":"section"},{"location":"#Purpose-1","page":"Introduction to UHD","title":"Purpose","text":"","category":"section"},{"location":"#","page":"Introduction to UHD","title":"Introduction to UHD","text":"This simple package proposes some bindings to the UHD, the C driver of the Universal Software Radio Peripheral USRP ","category":"page"},{"location":"#","page":"Introduction to UHD","title":"Introduction to UHD","text":"The purpose is to able to see the radio peripheral inside a Julia session and to be able to send and receive complex samples direclty within a Julia session. ","category":"page"},{"location":"#Installation-1","page":"Introduction to UHD","title":"Installation","text":"","category":"section"},{"location":"#","page":"Introduction to UHD","title":"Introduction to UHD","text":"The package can be installed with the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run:","category":"page"},{"location":"#","page":"Introduction to UHD","title":"Introduction to UHD","text":"pkg> add UHD ","category":"page"},{"location":"#","page":"Introduction to UHD","title":"Introduction to UHD","text":"Or, equivalently, via the Pkg API:","category":"page"},{"location":"#","page":"Introduction to UHD","title":"Introduction to UHD","text":"```julia julia> import Pkg; Pkg.add(\"UHD\")","category":"page"},{"location":"#Documentation-1","page":"Introduction to UHD","title":"Documentation","text":"","category":"section"},{"location":"#","page":"Introduction to UHD","title":"Introduction to UHD","text":"The base documentation with the different functions can be found in the base section\nDifferent examples are described in in the example section. Other examples are provided in the example subfolder of the project. ","category":"page"},{"location":"Examples/example_setup/#Set-up-a-Radio-Link-and-get-some-samples-1","page":"Set up a Radio Link and get some samples","title":"Set up a Radio Link and get some samples","text":"","category":"section"},{"location":"Examples/example_setup/#","page":"Set up a Radio Link and get some samples","title":"Set up a Radio Link and get some samples","text":"In order to get 4096 samples at 868MHz with a instantaneous bandwidth of 16MHz, with a 30dB Rx Gain, the following Julia code should do the trick. ","category":"page"},{"location":"Examples/example_setup/#","page":"Set up a Radio Link and get some samples","title":"Set up a Radio Link and get some samples","text":"function main()\n\t# ---------------------------------------------------- \n\t# --- Physical layer and RF parameters \n\t# ---------------------------------------------------- \n\tcarrierFreq\t= 868e6; \t% --- The carrier frequency (Hz)\t\n\tsamplingRate\t= 16e6;         % --- Targeted bandwidth (Hz)\n\trxGain\t\t= 30.0;         % --- Rx gain (dB)\n\tnbSamples\t= 4096;         % --- Desired number of samples\n\n\t# ---------------------------------------------------- \n\t# --- Getting all system with function calls  \n\t# ---------------------------------------------------- \n\t# --- Creating the radio resource \n\t# The first parameter is for specific parameter (FPGA bitstream, IP address)\n\tradio\t= openUHD(\"Rx\",\"\",carrierFreq,samplingRate,rxGain);\n\t# --- Display the current radio configuration\n\tprint(radio);\n\t# --- Getting a buffer from the radio \n\tsigAll\t= getBuffer(radio,nbSamples);\n\t# --- Release the radio resources\n\tclose(radio); \nend","category":"page"}]
}
